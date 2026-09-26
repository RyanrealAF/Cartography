const works=[
["I Said Good Day, Sir!","music","Dark cinematic survival manifesto.","I%20Said%20Good%20Day,%20Sir!.pdf"],
["Intro - Spoken Word","music","Identity, gossip, and the refusal to perform a false self.","Intro%20-%20Spoken%20word,%20tone%20is%20calm%20but%20cutting%20(Ryan%20Real%20A-F).pdf"],
["If you're on my team","music","Authenticity, accountability, loyalty, and the cost of masks.","If%20you're%20on%20my%20team%20(Loyalty%20Manifesto).pdf"],
["Grit and GRACE","theory","Street grit fused with sacred grace.","Grit%20and%20GRACE.pdf"],
["Ms. Ghost","relationship","Honesty, communication, trust, and uncertainty.","Song%20Title-%20Ms.%20Ghost%20.pdf"],
["What If?","relationship","The Genesis spark: fate, language, memory, and the impossible question.","What%20if%20goes%20darker.pdf"],
["Emily's Music Box","relationship","A memory preserved as rhythm, texture, and duet.","Emily's%20Music%20Box.pdf"],
["Love and Wifey","relationship","A study in connection, surrender, and movement without control.","Love%20and%20wifey%20(1).pdf"],
["Sweet Evilness","relationship","The darker response: poetry, power, and the spell of rhythm.","Sweet%20Evilness.pdf"],
["Scars Write the Book","narrative","Pain reframed as syllabus, archive, and hard-earned education.","scars%20write%20the%20book%20.pdf"],
["Concrete Communion","narrative","Faith, struggle, and sacred meaning in hard places.","Concrete%20Communion%20%20(1).pdf"],
["Water and Concrete","narrative","The collision of softness and structure.","Water%20and%20Concrete.pdf"],
["Chipped Tooth Grace","narrative","Grace without polish.","Chipped%20tooth%20grace%20(1).pdf"],
["The River Don't Weep","narrative","A piece of the larger survival and transformation archive.","THE%20RIVER%20DON'T%20WEEP%20(2).pdf"],
["Facts, Not Permission","theory","A principle-driven piece about acting from observed reality.","Facts,%20Not%20Permission.pdf"],
["From Westwood to the Real Westside","field","Place, class, perception, and lived geography.","From%20Westwood%20to%20the%20Real%20Westside.pdf"],
["Script-Squeeze","theory","A compact document from the broader creative systems archive.","Script-Squeeze.pdf"],
["Shadows and Sovereigns","narrative","The outlaw chronicles and their larger mythic frame.","Shadows%20and%20Sovereigns-%20The%20Outlaw%20Chronicles.pdf"],
["Beta Bro Batman","music","A character-driven entry from the archive.","Beta%20Bro%20Batman.pdf"],
["Can't Do It Like Me","music","A direct statement of voice and distinction.","CAN'T%20DO%20IT%20LIKE%20ME%20(1).pdf"],
["Ringmaster of Ruin","narrative","A darker character study from the archive.","RINGMASTER%20OF%20RUIN.pdf"],
["What If Goes Darker","relationship","The turn from wonder into suspicion and deliberate design.","What%20if%20goes%20darker.pdf"],
["You Know What's Up","music","A concise piece from the working song archive.","you%20know%20what's%20up%20.pdf"]
];

const archive=document.querySelector("#archive");
const buttons=[...document.querySelectorAll(".filters button")];

function render(filter="all"){
  const items=works.filter(w=>filter==="all"||w[1]===filter);
  archive.innerHTML=items.length?items.map(([title,type,desc,file])=>`
    <article class="work">
      <div class="meta">${type} / archive</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <a href="${file}">Open document →</a>
    </article>`).join(""):'<div class="empty">No work is filed under this territory yet.</div>';
}
buttons.forEach(btn=>btn.addEventListener("click",()=>{buttons.forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.filter)}));
render();