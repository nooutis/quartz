import fs from "fs"
import path from "path"

function patchFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return
  let content = fs.readFileSync(filePath, "utf8")
  let changed = false
  for (const { search, replace } of replacements) {
    if (content.includes(replace)) continue
    if (typeof search === "string") {
      if (content.includes(search)) {
        content = content.replace(search, replace)
        changed = true
      }
    } else if (search instanceof RegExp) {
      if (search.test(content)) {
        content = content.replace(search, replace)
        changed = true
      }
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, "utf8")
    console.log(`[Patch] Updated: ${path.relative(process.cwd(), filePath)}`)
  }
}

// 1. Graph: Text styling, zoom-only visibility, halo stroke, and language isolation
const graphFiles = [
  path.join(process.cwd(), "node_modules/@quartz-community/graph/dist/index.js"),
  path.join(process.cwd(), "node_modules/@quartz-community/graph/dist/components/index.js"),
]
for (const file of graphFiles) {
  patchFile(file, [
    // 1.1 Text creation: initial alpha=0, dark stroke for precedence over links
    {
      search:
        /(?:Du|lu)=new (?:a|o)\.Text\(\{text:(?:iu|Du)\.text,style:\{fontSize:We\*15,fill:ze,fontFamily:Ne[^}]*\},resolution:window\.devicePixelRatio\*4\}\);(?:Du|lu)\.anchor\.set\(\.5,1\.2\),(?:Du|lu)\.alpha=[01],(?:(?:Du|lu)\.eventMode="none",)?(?:Du|lu)\.scale\.set\(1\/(?:Vu|qu)\),vu\.addChild\((?:Du|lu)\);/,
      replace: `Du=new a.Text({text:iu.text,style:{fontSize:We*15,fill:ze,fontFamily:Ne,stroke:{color:"#030611",width:4,join:"round"}},resolution:window.devicePixelRatio*4});Du.anchor.set(.5,1.2),Du.alpha=0,Du.eventMode="none",Du.scale.set(1/Vu),vu.addChild(Du);`,
    },
    // 1.2 Hover handler: hover shows label at alpha=1
    {
      search:
        /function qe\(\)\{for\(var i=1\/(?:Vu|qu),l=i\*1\.1,F=0;F<(?:P|L)\.length;F\+\+\)\{var (?:v|A)=(?:P|L)\[F\];_u===(?:v|A)\.simulationData\.id\?\((?:v|A)\.label\.alpha=1,(?:v|A)\.label\.scale\.set\(l\)\):(?:\((?:v|A)\.label\.alpha=1,(?:v|A)\.label\.scale\.set\(i\)\)|(?:v|A)\.label\.scale\.set\(i\))\s*\}\}/,
      replace: `function qe(){for(var i=1/Vu,l=i*1.1,F=0;F<P.length;F++){var v=P[F];_u===v.simulationData.id?(v.label.alpha=1,v.label.scale.set(l)):v.label.scale.set(i)}}`,
    },
    // 1.3 Zoom handler: visible only when zoomed in (l > 1)
    {
      search:
        /var ut=function\(i\)\{(?:j|P)=i\.transform,(?:nu|ou)\.scale\.set\((?:j|P)\.k,(?:j|P)\.k\),(?:nu|ou)\.position\.set\((?:j|P)\.x,(?:j|P)\.y\);(?:for\(var v=0;v<vu\.children\.length;v\+\+\)\{vu\.children\[v\]\.alpha=1\}|for\(var l=(?:j|P)\.k\*Me,F=[^;]+,(?:v|A)=\[\],(?:C|v)=0;(?:C|v)<(?:P|L)\.length;(?:C|v)\+\+\)(?:P|L)\[(?:C|v)\]\.active&&(?:\bv|A)\.push\((?:P|L)\[(?:C|v)\]\.label\);for\(var (?:C|v)=0;(?:C|v)<vu\.children\.length;(?:C|v)\+\+\)\{var (?:T|j)=vu\.children\[(?:C|v)\];(?:\bv|A)\.indexOf\((?:T|j)\)===-1&&\((?:T|j)\.alpha=F\)\})\},et=(?:o|a)\.zoom/,
      replace: `var ut=function(i){j=i.transform,nu.scale.set(j.k,j.k),nu.position.set(j.x,j.y);for(var l=j.k*Me,F=Math.max(0,Math.min(1,(l-1)/.6)),v=[],C=0;C<P.length;C++)P[C].active&&v.push(P[C].label);for(var C=0;C<vu.children.length;C++){var T=vu.children[C];v.indexOf(T)===-1&&(T.alpha=F)}},et=o.zoom`,
    },
    // 1.4 Language filter: isolate nodes by language
    {
      search:
        /try\{var (?:qu|Ku)=await fetchData;(?:uu|eu)=new Map;(?:[\s\S]*?)for\(var (?:Ku|Ju) in (?:qu|Ku)\)\{?(?:uu|eu)\.set\((?:_k|cu|Fu)\((?:Ku|Ju)\),(?:qu|Ku)\[(?:Ku|Ju)\]\)\}?\}catch\(i\)\{return console\.error\("\[Graph\] Error loading data:",i\),function\(\)\{\}\}/,
      replace: `try{var qu=await fetchData;uu=new Map;var _cur=g||(typeof document!=="undefined"&&document.body?.dataset?.slug)||"";var _isIt=_cur.startsWith("it/")||_cur==="it";var _isEn=_cur.startsWith("en/")||_cur==="en";for(var Ku in qu){var _k=cu(Ku);if(_k==="/"||_k.endsWith("/")||_k==="it"||_k==="en")continue;if(_k.startsWith("tags/"))continue;if(_isIt&&(_k.startsWith("en/")||_k==="en"))continue;if(_isEn&&(_k.startsWith("it/")||_k==="it"))continue;uu.set(_k,qu[Ku])}}catch(i){return console.error("[Graph] Error loading data:",i),function(){}}`,
    },
    // 1.5 Link filter: prevent direct cross-language edges between Italian and English notes
    {
      search:
        /(?:Ju|Xu)=new Set\((?:uu|eu)\.keys\(\)\);(?:uu|eu)\.forEach\(function\(i,l\)\{(?:var _isItL[^;]+;var _isEnL[^;]+;)?for\(var F=i\.links\|\|\[\],(?:v|A)=0;(?:v|A)<F\.length;(?:v|A)\+\+\)\{var (?:C|v)=(?:cu|Fu)\(F\[(?:v|A)\]\);(?:var _isItC[^;]+;var _isEnC[^;]+;if\([^)]+\)continue;)?(?:Ju|Xu)\.has\((?:C|v)\)&&(?:eu|tu)\.push\(\{source:l,target:(?:C|v)\}\)\}/,
      replace: `Ju=new Set(uu.keys());uu.forEach(function(i,l){var _isItL=l.startsWith("it/")||l==="it";var _isEnL=l.startsWith("en/")||l==="en";for(var F=i.links||[],v=0;v<F.length;v++){var C=cu(F[v]);var _isItC=C.startsWith("it/")||C==="it";var _isEnC=C.startsWith("en/")||C==="en";if((_isItL&&_isEnC)||(_isEnL&&_isItC))continue;Ju.has(C)&&eu.push({source:l,target:C})}`,
    },
  ])
}

// 2. Explorer: filter other-language nodes from trie rendering
const explorerFiles = [
  path.join(process.cwd(), "node_modules/@quartz-community/explorer/dist/index.js"),
  path.join(process.cwd(), "node_modules/@quartz-community/explorer/dist/components/index.js"),
]
for (const file of explorerFiles) {
  patchFile(file, [
    {
      search:
        /let n=document\.getElementById\("template-folder"\),d=document\.getElementById\("template-file"\);if\(!n\|\|!d\)return;(?:let _cur=[^;]+;let _isIt=[^;]+;let _isEn=[^;]+;let _ns=[^;]+;if\(_isIt&&[^)]+\)return;if\(_isEn&&[^)]+\)return;)*let E=t\?t\+"\/"\+u\.slugSegment:u\.slugSegment/,
      replace: `let n=document.getElementById("template-folder"),d=document.getElementById("template-file");if(!n||!d)return;let _cur=(D||(typeof document!=="undefined"&&document.body?.dataset?.slug)||"");let _isIt=_cur==="it"||_cur.startsWith("it/");let _isEn=_cur==="en"||_cur.startsWith("en/");let _ns=u.slug||u.data?.slug||u.slugSegment||"";if(_isIt&&(_ns==="en"||_ns.startsWith("en/")||u.slugSegment==="en"))return;if(_isEn&&(_ns==="it"||_ns.startsWith("it/")||u.slugSegment==="it"))return;let E=t?t+"/"+u.slugSegment:u.slugSegment`,
    },
  ])
}

// 3. Recent Notes: filter pages by current page language
const recentNotesFiles = [
  path.join(process.cwd(), "node_modules/@quartz-community/recent-notes/dist/index.js"),
  path.join(process.cwd(), "node_modules/@quartz-community/recent-notes/dist/components/index.js"),
]
for (const file of recentNotesFiles) {
  patchFile(file, [
    {
      search:
        /const pages = filterListedPages\(allFiles\)\.filter\(\(p2\) => !opts\.hideTagPages \|\| !isTagPageSlug\(p2\.slug\)\)\.filter\(\(p2\) => !opts\.hideFolderPages \|\| !isFolderPageSlug\(p2\.slug\)\)\.filter\(opts\.filter\)\.sort\(opts\.sort\);/,
      replace: `const _isIt = fileData.slug?.startsWith("it/") || fileData.slug === "it"; const _isEn = fileData.slug?.startsWith("en/") || fileData.slug === "en"; const pages = filterListedPages(allFiles).filter((p2) => !opts.hideTagPages || !isTagPageSlug(p2.slug)).filter((p2) => !opts.hideFolderPages || !isFolderPageSlug(p2.slug)).filter((p2) => { if (_isIt) return p2.slug?.startsWith("it/") || p2.slug === "it"; if (_isEn) return p2.slug?.startsWith("en/") || p2.slug === "en"; return true; }).filter(opts.filter).sort(opts.sort);`,
    },
  ])
}

// 4. Backlinks: filter backlink sources by current slug language
const backlinksFiles = [
  path.join(process.cwd(), "node_modules/@quartz-community/backlinks/dist/index.js"),
  path.join(process.cwd(), "node_modules/@quartz-community/backlinks/dist/components/index.js"),
]
for (const file of backlinksFiles) {
  patchFile(file, [
    {
      search:
        /function selectBacklinkSources\(allFiles, currentSlug\) \{\s*return allFiles\.filter\(\(file\) => file\.unlisted !== true && file\.links\?\.includes\(currentSlug\)\);\s*\}/,
      replace: `function selectBacklinkSources(allFiles, currentSlug) { const _isIt = currentSlug.startsWith("it/") || currentSlug === "it"; const _isEn = currentSlug.startsWith("en/") || currentSlug === "en"; return allFiles.filter((file) => { if (file.unlisted === true) return false; if (_isIt && !file.slug?.startsWith("it/") && file.slug !== "it") return false; if (_isEn && !file.slug?.startsWith("en/") && file.slug !== "en") return false; return file.links?.includes(currentSlug); }); }`,
    },
  ])
}

// 5. Search: filter search results by current page language
const searchFiles = [
  path.join(process.cwd(), "node_modules/@quartz-community/search/dist/index.js"),
  path.join(process.cwd(), "node_modules/@quartz-community/search/dist/components/index.js"),
]
for (const file of searchFiles) {
  patchFile(file, [
    {
      search:
        /z=async _=>\{if\(tt\(f\),_\.length===0\)\{let E=document\.createElement\("a"\);E\.className="result-card no-match";/,
      replace: `z=async _=>{let _cur=(typeof document!=="undefined"&&document.body?.dataset?.slug)||"";let _isIt=_cur.startsWith("it/")||_cur==="it"||_cur.startsWith("it");let _isEn=_cur.startsWith("en/")||_cur==="en"||_cur.startsWith("en");if(_isIt)_=_.filter(E=>!E.slug?.startsWith("en/")&&E.slug!=="en");if(_isEn)_=_.filter(E=>!E.slug?.startsWith("it/")&&E.slug!=="it");if(tt(f),_.length===0){let E=document.createElement("a");E.className="result-card no-match";`,
    },
  ])
}
