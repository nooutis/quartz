import fs from "fs"
import path from "path"

const files = [
  path.join(process.cwd(), "node_modules/@quartz-community/graph/dist/index.js"),
  path.join(process.cwd(), "node_modules/@quartz-community/graph/dist/components/index.js"),
]

for (const file of files) {
  if (!fs.existsSync(file)) continue
  let content = fs.readFileSync(file, "utf8")

  // 1. Text creation: initial alpha=0 (hidden until zoomed in or hovered), with dark stroke for precedence over links
  content = content.replace(
    /lu=new o\.Text\(\{text:Du\.text,style:\{fontSize:We\*15,fill:ze,fontFamily:Ne[^}]*\},resolution:window\.devicePixelRatio\*4\}\);lu\.anchor\.set\(\.5,1\.2\),lu\.alpha=[01],(?:lu\.eventMode="none",)?lu\.scale\.set\(1\/qu\),vu\.addChild\(lu\);/,
    `lu=new o.Text({text:Du.text,style:{fontSize:We*15,fill:ze,fontFamily:Ne,stroke:{color:"#030611",width:4,join:"round"}},resolution:window.devicePixelRatio*4});lu.anchor.set(.5,1.2),lu.alpha=0,lu.eventMode="none",lu.scale.set(1/qu),vu.addChild(lu);`
  )

  // 2. Hover handler: hover shows label at alpha=1
  content = content.replace(
    /function qe\(\)\{for\(var i=1\/qu,l=i\*1\.1,F=0;F<L\.length;F\+\+\)\{var A=L\[F\];_u===A\.simulationData\.id\?\(A\.label\.alpha=1,A\.label\.scale\.set\(l\)\):(?:\(A\.label\.alpha=1,A\.label\.scale\.set\(i\)\)|A\.label\.scale\.set\(i\))\s*\}\}/,
    `function qe(){for(var i=1/qu,l=i*1.1,F=0;F<L.length;F++){var A=L[F];_u===A.simulationData.id?(A.label.alpha=1,A.label.scale.set(l)):A.label.scale.set(i)}}`
  )

  // 3. Zoom handler: visible only when zoomed in (l > 1)
  content = content.replace(
    /var ut=function\(i\)\{P=i\.transform,ou\.scale\.set\(P\.k,P\.k\),ou\.position\.set\(P\.x,P\.y\);(?:for\(var v=0;v<vu\.children\.length;v\+\+\)\{vu\.children\[v\]\.alpha=1\}|for\(var l=P\.k\*Me,F=[^,]+,A=\[\],v=0;v<L\.length;v\+\+\)L\[v\]\.active&&A\.push\(L\[v\]\.label\);for\(var v=0;v<vu\.children\.length;v\+\+\)\{var j=vu\.children\[v\];A\.indexOf\(j\)===-1&&\(j\.alpha=F\)\})\},et=a\.zoom/,
    `var ut=function(i){P=i.transform,ou.scale.set(P.k,P.k),ou.position.set(P.x,P.y);for(var l=P.k*Me,F=Math.max(0,Math.min(1,(l-1)/.6)),A=[],v=0;v<L.length;v++)L[v].active&&A.push(L[v].label);for(var v=0;v<vu.children.length;v++){var j=vu.children[v];A.indexOf(j)===-1&&(j.alpha=F)}},et=a.zoom`
  )

  fs.writeFileSync(file, content, "utf8")
}
