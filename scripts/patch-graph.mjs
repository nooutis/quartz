import fs from "fs"
import path from "path"

function patchFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return
  let content = fs.readFileSync(filePath, "utf8")
  let changed = false
  for (const { search, replace } of replacements) {
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
      search: /lu=new o\.Text\(\{text:Du\.text,style:\{fontSize:We\*15,fill:ze,fontFamily:Ne[^}]*\},resolution:window\.devicePixelRatio\*4\}\);lu\.anchor\.set\(\.5,1\.2\),lu\.alpha=[01],(?:lu\.eventMode="none",)?lu\.scale\.set\(1\/qu\),vu\.addChild\(lu\);/,
      replace: `lu=new o.Text({text:Du.text,style:{fontSize:We*15,fill:ze,fontFamily:Ne,stroke:{color:"#030611",width:4,join:"round"}},resolution:window.devicePixelRatio*4});lu.anchor.set(.5,1.2),lu.alpha=0,lu.eventMode="none",lu.scale.set(1/qu),vu.addChild(lu);`,
    },
    // 1.2 Hover handler: hover shows label at alpha=1
    {
      search: /function qe\(\)\{for\(var i=1\/qu,l=i\*1\.1,F=0;F<L\.length;F\+\+\)\{var A=L\[F\];_u===A\.simulationData\.id\?\(A\.label\.alpha=1,A\.label\.scale\.set\(l\)\):(?:\(A\.label\.alpha=1,A\.label\.scale\.set\(i\)\)|A\.label\.scale\.set\(i\))\s*\}\}/,
      replace: `function qe(){for(var i=1/qu,l=i*1.1,F=0;F<L.length;F++){var A=L[F];_u===A.simulationData.id?(A.label.alpha=1,A.label.scale.set(l)):A.label.scale.set(i)}}`,
    },
    // 1.3 Zoom handler: visible only when zoomed in (l > 1)
    {
      search: /var ut=function\(i\)\{P=i\.transform,ou\.scale\.set\(P\.k,P\.k\),ou\.position\.set\(P\.x,P\.y\);(?:for\(var v=0;v<vu\.children\.length;v\+\+\)\{vu\.children\[v\]\.alpha=1\}|for\(var l=P\.k\*Me,F=[^,]+,A=\[\],v=0;v<L\.length;v\+\+\)L\[v\]\.active&&A\.push\(L\[v\]\.label\);for\(var v=0;v<vu\.children\.length;v\+\+\)\{var j=vu\.children\[v\];A\.indexOf\(j\)===-1&&\(j\.alpha=F\)\})\},et=a\.zoom/,
      replace: `var ut=function(i){P=i.transform,ou.scale.set(P.k,P.k),ou.position.set(P.x,P.y);for(var l=P.k*Me,F=Math.max(0,Math.min(1,(l-1)/.6)),A=[],v=0;v<L.length;v++)L[v].active&&A.push(L[v].label);for(var v=0;v<vu.children.length;v++){var j=vu.children[v];A.indexOf(j)===-1&&(j.alpha=F)}},et=a.zoom`,
    },
    // 1.4 Language filter: isolate nodes and links by language
    {
      search: /var Ku=await fetchData;eu=new Map;for\(var Ju in Ku\)eu\.set\(Fu\(Ju\),Ku\[Ju\]\)/,
      replace: `var Ku=await fetchData;eu=new Map;var _cur=m||(typeof document!=="undefined"&&document.body?.dataset?.slug)||"";var _isIt=_cur.startsWith("it/")||_cur==="it"||_cur.startsWith("it");var _isEn=_cur.startsWith("en/")||_cur==="en"||_cur.startsWith("en");for(var Ju in Ku){var _k=Fu(Ju);if(_isIt&&(_k.startsWith("en/")||_k==="en"))continue;if(_isEn&&(_k.startsWith("it/")||_k==="it"))continue;eu.set(_k,Ku[Ju])}`,
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
      search: /let n=document\.getElementById\("template-folder"\),d=document\.getElementById\("template-file"\);if\(!n\|\|!d\)return;/,
      replace: `let n=document.getElementById("template-folder"),d=document.getElementById("template-file");if(!n||!d)return;let _cur=(D||(typeof document!=="undefined"&&document.body?.dataset?.slug)||"");let _isIt=_cur.startsWith("it/")||_cur==="it"||_cur.startsWith("it");let _isEn=_cur.startsWith("en/")||_cur==="en"||_cur.startsWith("en");let _ns=u.slug||u.data?.slug||u.slugSegment||"";if(_isIt&&(_ns==="en"||_ns.startsWith("en/")))return;if(_isEn&&(_ns==="it"||_ns.startsWith("it/")))return;`,
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
      search: /const pages = filterListedPages\(allFiles\)\.filter\(\(p2\) => !opts\.hideTagPages \|\| !isTagPageSlug\(p2\.slug\)\)\.filter\(\(p2\) => !opts\.hideFolderPages \|\| !isFolderPageSlug\(p2\.slug\)\)\.filter\(opts\.filter\)\.sort\(opts\.sort\);/,
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
      search: /function selectBacklinkSources\(allFiles, currentSlug\) \{\s*return allFiles\.filter\(\(file\) => file\.unlisted !== true && file\.links\?\.includes\(currentSlug\)\);\s*\}/,
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
      search: /z=async _=>\{if\(tt\(f\),_\.length===0\)\{let E=document\.createElement\("a"\);E\.className="result-card no-match";/,
      replace: `z=async _=>{let _cur=(typeof document!=="undefined"&&document.body?.dataset?.slug)||"";let _isIt=_cur.startsWith("it/")||_cur==="it"||_cur.startsWith("it");let _isEn=_cur.startsWith("en/")||_cur==="en"||_cur.startsWith("en");if(_isIt)_=_.filter(E=>!E.slug?.startsWith("en/")&&E.slug!=="en");if(_isEn)_=_.filter(E=>!E.slug?.startsWith("it/")&&E.slug!=="it");if(tt(f),_.length===0){let E=document.createElement("a");E.className="result-card no-match";`,
    },
  ])
}
