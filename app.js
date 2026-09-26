const file=name=>encodeURIComponent(name);
const journey=[
["01","The SB Underground Origins","Late 2018–2019","The Santa Barbara foundation before the formal chronology.",[["The Bando Origin","narrative","master"]]],
["02","The Threshold","March 2020","Emily's pre-existing What If meets Ryan's street-built rebuttal and the Weaving Technique.",[["Emily's Original Poem · What If","original poem","master"],["Ryan's Rebuttal Poem","rebuttal","master"],["What If (The Genesis)","braided duet","master"]]],
["03","The Parallel Pavements","Summer 2020","Midnight Drifts and the shared rhythm across separate coordinates.",[["Midnight Drifts","chapter work","master"]]],
["04","Parallel Memories","2021","Music Box becomes Maybe Us, moving the archive from cosmic inquiry into memory.",[["Emily's Original Poem · Music Box","original poem","master"],["Maybe Us · Music Box Duet","braided duet","master"],["Emily's Music Box","archive artifact","Emily's Music Box.pdf"]]],
["05","The Dark Pivot","Winter 2021","What If Goes Darker provokes Sweet Evilness and opens the reactive tier.",[["What If Goes Darker","provocation","What if goes darker.pdf"],["Sweet Evilness","response","Sweet Evilness.pdf"]]],
["06","The Static & The Signal","Spring 2022","Late-night fragments, voice notes, and cryptic transmissions.",[["The Static & The Signal","chapter work","master"]]],
["07","The Arc Climax","Autumn 2022","Speak Me Ready makes the demand for commitment explicit.",[["Speak Me Ready","song / source text","master"]]],
["08","The Hinge","Late 2023","My Little Flame is Emily's first direct-address work for Ryan.",[["My Little Flame","direct-address poem","master"]]],
["09","The Resolution","2024 onward","Scars Write the Book connects the relationship archive to the teacher inside the scars.",[["Scars Write the Book","testimonial","scars write the book .pdf"]]],
["10","The Glass Archive & System Architecture","Late 2024–Early 2026","The work becomes an archive and technical system.",[["Glass House","archive artifact","--GLASS HOUSE-- (1).pdf"],["Genesis Series · Analytical Track Database","technical archive","Genesis Series_ Analytical Track Database.txt"],["The RyanrealAF Codex","master archive","The RyanrealAF Codex_ A Comprehensive Discography and Narrative Cartography.pdf"]]],
["11","The Uncrossed Threshold","Late June 2026","Borrowed Heart preserves the doorway, boundary, declaration, and long walk.",[["Borrowed Heart","complete source text","master"]]],
["12","The Burbank Pickup & Drive North","August 2026","Already Is closes the chronology with appreciation rather than possession.",[["Already Is","tribute master track","master"]]]
];
const artifacts=[
["Dance of Dark and Light","music","Contrast, tension, and balance.","Dance of dark and light.pdf"],
["Beta Bro Batman","music","A character-driven working song.","Beta Bro Batman.pdf"],
["Can't Do It Like Me","music","A direct statement of voice and distinction.","CAN'T DO IT LIKE ME (1).pdf"],
["You Know What's Up","music","A concise working song.","you know what's up .pdf"],
["Love and Wifey","relationship","Connection, surrender, and movement without control.","Love and wifey (1).pdf"],
["Love Is Like Wu Wei","relationship","Love, surrender, and movement without force.","Love is like Wu Wei.pdf"],
["Ms. Ghost","relationship","Honesty, communication, trust, and uncertainty.","Song Title- Ms. Ghost .pdf"],
["Sweet Evilness","relationship","The dark reactive response.","Sweet Evilness.pdf"],
["What If Goes Darker","relationship","Ryan's darker provocation.","What if goes darker.pdf"],
["Emily's Music Box","relationship","Memory preserved as rhythm and duet.","Emily's Music Box.pdf"],
["Scars Write the Book","narrative","Pain reframed as syllabus and education.","scars write the book .pdf"],
["Concrete Awakening","narrative","Grit, survival, identity, faith, and reconstruction.","Concrete Awakening- The Complete Narrative.pdf"],
["Concrete Communion","narrative","Faith, struggle, and sacred meaning.","Concrete Communion  (1).pdf"],
["Water and Concrete","narrative","Softness and structure in collision.","Water and Concrete.pdf"],
["Chipped Tooth Grace","narrative","Grace without polish.","Chipped tooth grace (1).pdf"],
["The River Don't Weep","narrative","Survival and transformation.","THE RIVER DON'T WEEP (2).pdf"],
["Shadows and Sovereigns","narrative","The outlaw chronicles and their mythic frame.","Shadows and Sovereigns- The Outlaw Chronicles.pdf"],
["Ringmaster of Ruin","narrative","A darker character study.","RINGMASTER OF RUIN.pdf"],
["Facts, Not Permission","theory","Acting from observed reality.","Facts, Not Permission.pdf"],
["Script-Squeeze","theory","A compact creative systems document.","Script-Squeeze.pdf"],
["RyanrealAF Master Brand & Strategy Codex","theory","Strategic and conceptual architecture.","RyanrealAF Master Brand & Strategy Codex.md.markdown"],
["RYAN REAL AF · The Lexicon","theory","The vocabulary of the RyanrealAF operating system.","RYAN REAL AF — THE LEXICON.html"],
["From Westwood to the Real Westside","field","Place, class, perception, and lived geography.","From Westwood to the Real Westside.pdf"],
["Complete Creative Journey Report","relationship","The Emily and Ryan partnership record.","Creative Journey Report_ The Emily and Ryan Partnership (Four-Year Evolution).txt"],
["Emily + Ryan · Complete Journey & Lyrics","relationship","The tiered lyrical archive and production framework.","Emily and Ryan's creative journey .txt"],
["12-Chapter Lyrical & Narrative Archive","relationship","The authoritative chronology and complete source texts.","complete-lyrical-and-narrative-timeline (1).md"],
["Ryan's Final Plee to Emily","relationship","A direct-address archive document.","Ryan's final plee to Emily.pdf"]
];
const archive=document.querySelector("#archive-list"),view=document.querySelector("#territory-view");
function item([name,role,target]){return '<div class="artifact"><div><div class="artifact-name">'+name+'</div><div class="artifact-role">'+role+'</div></div><div>'+(target==="master"?'<span class="artifact-status">MASTER SOURCE</span>':'<a href="'+file(target)+'">Open artifact →</a>')+'</div></div>'}
function renderJourney(){view.innerHTML='<div class="journey-head"><div class="meta">01 / 2018–2026</div><div><h3>Emily + Ryan</h3><p>Twelve chapters. The master timeline is the source layer; standalone files remain artifacts where they exist.</p></div></div><div class="chapters">'+journey.map(c=>'<article class="chapter"><div class="chapter-num">CH '+c[0]+'</div><div><h4>'+c[1]+'</h4><div class="chapter-era">'+c[2]+'</div><p>'+c[3]+'</p><div class="artifacts">'+c[4].map(item).join("")+'</div></div></article>').join("")+'</div>'}
function renderArchive(filter="all"){const xs=artifacts.filter(x=>filter==="all"||x[1]===filter);archive.innerHTML=xs.map(x=>'<article class="work"><div class="meta">'+x[1]+' / artifact</div><h3>'+x[0]+'</h3><p>'+x[2]+'</p><a href="'+file(x[3])+'">Open artifact →</a></article>').join("")}
function territory(kind){if(kind==="emily"){renderJourney()}else{const map={concrete:["Concrete / Survival","narrative"],systems:["RyanrealAF Architecture","theory"],music:["Working Music Archive","music"],field:["Field / Place / PSA","field"],outlaw:["Shadows + Sovereigns","narrative"]};const d=map[kind];const xs=artifacts.filter(x=>d[1]==="narrative"?["Concrete / Survival","Shadows + Sovereigns"].includes(d[0])&&["Concrete Awakening","Concrete Communion","Water and Concrete","Chipped Tooth Grace","The River Don't Weep","Shadows and Sovereigns","Ringmaster of Ruin"].includes(x[0]):x[1]===d[1]);view.innerHTML='<div class="journey-head"><div class="meta">TERRITORY</div><div><h3>'+d[0]+'</h3><p>Connected artifacts filed by territory rather than flattened into a generic list.</p></div></div><div class="archive-grid">'+xs.map(x=>'<article class="work"><div class="meta">'+x[1]+' / artifact</div><h3>'+x[0]+'</h3><p>'+x[2]+'</p><a href="'+file(x[3])+'">Open artifact →</a></article>').join("")+'</div>'}document.querySelector("#journey").scrollIntoView({behavior:"smooth"})}
document.querySelectorAll(".enter").forEach(b=>b.onclick=()=>territory(b.dataset.territory));
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderArchive(b.dataset.filter)});
renderJourney();renderArchive();