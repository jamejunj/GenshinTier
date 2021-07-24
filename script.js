const charSpawn = document.getElementById('char');
const wpSpawn = document.getElementById('wp');
const uploadSpawn = charSpawn; //document.getElementById('upload');

const main = document.getElementById('main');

const charByAlpha = [
  'albedo',
  'amber',
  'barbara',
  'beidou',
  'bennett',
  'chongyun',
  'diluc',
  'diona',
  'eula',
  'fischl',
  'ganyu',
  'hutao',
  'jean',
  'kaeya',
  'kazuha',
  'keqing',
  'klee',
  'lisa',
  'mona',
  'ningguang',
  'noelle',
  'qiqi',
  'razor',
  'rosaria',
  'sucrose',
  'tartaglia',
  'venti',
  'xiangling',
  'xiao',
  'xingqiu',
  'xinyan',
  'yanfei',
  'zhongli',
  'ayaka',
  'sayu',
  'yoimiya',
  'traveler_boy_anemo',
  'traveler_boy_geo',
  'traveler_boy_electro',
  'traveler_girl_anemo',
  'traveler_girl_geo',
  'traveler_girl_electro',
]

const char = ["noelle"
  ,"ningguang"
  ,"zhongli"
  ,"albedo"
  ,"amber"
  ,"bennett"
  ,"xiangling"
  ,"xinyan"
  ,"diluc"
  ,"klee"
  ,"hutao"
  ,"yanfei"
  ,"yoimiya"
  ,"barbara"
  ,"xingqiu"
  ,"mona"
  ,"tartaglia"
  ,"kaeya"
  ,"chongyun"
  ,"qiqi"
  ,"diona"
  ,"ganyu"
  ,"rosaria"
  ,"eula"
  ,"ayaka"
  ,"lisa"
  ,"razor"
  ,"fischl"
  ,"beidou"
  ,"keqing"
  ,"jean"
  ,"sucrose"
  ,"venti"
  ,"xiao"
  ,"kazuha"
  ,"sayu"
  ,"traveler_boy_anemo"
  ,"traveler_boy_geo"
  ,"traveler_boy_electro"
  ,"traveler_girl_anemo"
  ,"traveler_girl_geo"
  ,"traveler_girl_electro"
]

const weapons = ["w_1001_70.png","w_1101_70.png","w_1201_70.png","w_1202_70.png","w_1203_70.png","w_1204_70.png","w_1205_70.png","w_1206_70.png","w_1301_70.png","w_1302_70.png","w_1303_70.png","w_1304_70.png","w_1305_70.png","w_1306_70.png","w_1307_70.png","w_1308_70.png","w_1309_70.png","w_1310_70.png","w_1311_70.png","w_1312_70.png","w_1313_70.png","w_1401_70.png","w_1402_70.png","w_1403_70.png","w_1404_70.png","w_1405_70.png","w_1407_70.png","w_2001_70.png","w_2101_70.png","w_2201_70.png","w_2202_70.png","w_2203_70.png","w_2205_70.png","w_2206_70.png","w_2301_70.png","w_2302_70.png","w_2303_70.png","w_2304_70.png","w_2305_70.png","w_2306_70.png","w_2307_70.png","w_2308_70.png","w_2309_70.png","w_2310_70.png","w_2311_70.png",,"w_2312_70.png","w_2401_70.png","w_2402_70.png","w_2404_70.png","w_2405_70.png","w_3001_70.png","w_3101_70.png","w_3201_70.png","w_3202_70.png","w_3203_70.png","w_3301_70.png","w_3302_70.png","w_3303_70.png","w_3305_70.png","w_3306_70.png","w_3307_70.png","w_3308_70.png","w_3309_70.png","w_3310_70.png","w_3401_70.png","w_3402_70.png","w_3403_70.png","w_3404_70.png","w_3405_70.png","w_4001_70.png","w_4101_70.png","w_4202_70.png","w_4203_70.png","w_4204_70.png","w_4205_70.png","w_4206_70.png","w_4301_70.png","w_4302_70.png","w_4303_70.png","w_4304_70.png","w_4305_70.png","w_4306_70.png","w_4307_70.png","w_4308_70.png","w_4309_70.png","w_4310_70.png","w_4311_70.png","w_4312_70.png","w_4313_70.png","w_4401_70.png","w_4402_70.png","w_4404_70.png","w_4407_70.png","w_5001_70.png","w_5101_70.png","w_5202_70.png","w_5203_70.png","w_5204_70.png","w_5205_70.png","w_5206_70.png","w_5301_70.png","w_5302_70.png","w_5303_70.png","w_5304_70.png","w_5305_70.png","w_5306_70.png","w_5307_70.png","w_5308_70.png","w_5309_70.png","w_5310_70.png","w_5311_70.png","w_5312_70.png","w_5313_70.png","w_5401_70.png","w_5402_70.png","w_5403_70.png"];





const wp_star = [
  1,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,
  1,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,
  1,2,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,
  1,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,
  1,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,
]

const enemies = [
  {name:"Dendro Slime",src:"m_20010501_70 (2).png"},
  {name:"Large",src:"m_20010201_70.png"},
  {name:"Anemo Slime",src:"m_20010301_70.png"},
  {name:"Large",src:"m_20010401_70.png"},
  {name:"Electro Slime",src:"m_20010501_70.png"}, 
  {name:"Large",src:"m_20010601_70.png"}, 
  {name:"Mutant",src:"m_20010701_70.png"}, 
  {name:"Cyro Slime",src:"m_20010801_70.png"}, 
  {name:"Large",src:"m_20010901_70.png"}, 
  {name:"Hydro Slime",src:"m_20011001_70.png"}, 
  {name:"Large",src:"m_20011101_70.png"}, 
  {name:"Pyro Slime",src:"m_20011201_70.png"}, 
  {name:"Large",src:"m_20011301_70.png"}, 
  {name:"Geo Slime",src:"m_20011401_70.png"}, 
  {name:"Large",src:"m_20011501_70.png"}, 
  {name:"Eye of the Storm",src:"m_20020101_70.png"}, 
  {name:"Electro H.",src:"m_20040101_70.png"}, 
  {name:"Anemo H.",src:"m_20040201_70.png"}, 
  {name:"Geo H.",src:"m_20040301_70.png"}, 
  {name:"Cryo H.",src:"m_20040501_70.png"}, 
  {name:"Pyro H.",src:"m_20040601_70.png"}, 
  {name:"Oceanid",src:"m_20050101_70.png"}, 
  {name:"Rhodeia",src:"m_20050101_70.png"}, 
  {name:"Urania",src:"m_20050101_70.png"}, 
  {name:"Boar",src:"ndm_502_70.png"}, 
  {name:"Crane",src:"ndm_502_70.png"}, 
  {name:"Crab",src:"ndm_502_70.png"}, 
  {name:"Finch",src:"ndm_502_70.png"}, 
  {name:"Mallard",src:"ndm_502_70.png"}, 
  {name:"Ferret",src:"ndm_502_70.png"}, 
  {name:"Frog",src:"ndm_502_70.png"}, 
  {name:"Raptor",src:"ndm_502_70.png"},
  {name:"Azhdaha",src:"m_29040101_70.png"},
  {name:"Hilichurls",src:"m_21010101_70.png"}, 
  {name:"Fighter",src:"m_21010201_70.png"}, 
  {name:"Wooden Shield",src:"m_21010301_70.png"}, 
  {name:"Shooter",src:"m_21010401_70.png"}, 
  {name:"Pyro Shooter",src:"m_21010501_70.png"}, 
  {name:"Pyro Grenadier",src:"m_21010601_70.png"}, 
  {name:"Pyro Berserker",src:"m_21010701_70.png"}, 
  {name:"Cyro Shooter",src:"m_21010901_70.png"}, 
  {name:"Electro Shooter",src:"m_21011001_70.png"}, 
  {name:"Rock Shield",src:"m_21011201_70.png"}, 
  {name:"Cyro Grenadier",src:"m_21011301_70.png"}, 
  {name:"Ice Shield",src:"m_21011401_70.png"}, 
  {name:"Unusual",src:"m_21011501_70.png"}, 
  {name:"Electro Grenadier",src:"m_21011601_70.png"}, 
  {name:"Wooden Shield",src:"m_21020101_70.png"}, 
  {name:"Blazing Axe",src:"m_21020201_70.png"}, 
  {name:"Rock Shield",src:"m_21020301_70.png"}, 
  {name:"Lawachurl",src:"m_21020401_70.png"}, 
  {name:"Lawachurl",src:"m_21020501_70.png"}, 
  {name:"Ice Shieldwall",src:"m_21020601_70.png"}, 
  {name:"Crackling Axe",src:"m_21020701_70.png"}, 
  {name:"Lawachurl",src:"m_21020801_70.png"}, 
  {name:"Samachurl",src:"m_21030101_70.png"}, 
  {name:"Samachurl",src:"m_21030201_70.png"}, 
  {name:"Samachurl",src:"m_21030301_70.png"}, 
  {name:"Samachurl",src:"m_21030401_70.png"}, 
  {name:"Samachurl",src:"m_21030501_70.png"}, 
  {name:"Samachurl",src:"m_21030601_70.png"}, 
  {name:"Abyss Mage",src:"m_22010101_70.png"}, 
  {name:"Abyss Mage",src:"m_22010201_70.png"}, 
  {name:"Abyss Mage",src:"m_22010301_70.png"}, 
  {name:"Abyss Mage",src:"m_22010401_70.png"}, 
  {name:"Abyss Herald",src:"m_22020101_70.png"}, 
  {name:"Abyss Lector",src:"m_22030101_70.png"}, 
  {name:"Fatui",src:"m_23010101_70.png"}, 
  {name:"Fatui",src:"m_23010201_70.png"}, 
  {name:"Fatui",src:"m_23010301_70.png"}, 
  {name:"Fatui",src:"m_23010401_70.png"}, 
  {name:"Fatui",src:"m_23010501_70.png"}, 
  {name:"Fatui",src:"m_23010601_70.png"}, 
  {name:"Agent",src:"m_23020101_70.png"}, 
  {name:"Cicin Mage",src:"m_23030101_70.png"}, 
  {name:"Cicin Mage",src:"m_23040101_70.png"}, 
  {name:"Mirror Maiden",src:"m_23050101_70.png"}, 
  {name:"Ruin Guard",src:"m_24010101_70.png"}, 
  {name:"Ruin Hunter",src:"m_24010201_70.png"}, 
  {name:"Ruin Grader",src:"m_24010301_70.png"}, 
  {name:"Ruin Cruiser",src:"m_24020101_70.png"}, 
  {name:"Ruin Destroyer",src:"m_24020201_70.png"}, 
  {name:"Ruin Defender",src:"m_24020301_70.png"}, 
  {name:"Ruin Scount",src:"m_24020401_70.png"}, 
  {name:"Perpetual Array",src:"m_24021101_70.png"}, 
  {name:"Treasure",src:"m_25010101_70.png"}, 
  {name:"Scount",src:"m_25010201_70.png"}, 
  {name:"Pyro",src:"m_25010301_70.png"}, 
  {name:"Hydro",src:"m_25010401_70.png"}, 
  {name:"Electro",src:"m_25010501_70.png"}, {name:"Cryo",src:"m_25010601_70.png"}, {name:"Handyman",src:"m_25010701_70.png"}, {name:"Raptor",src:"m_25020101_70.png"}, {name:"Marksman",src:"m_25020201_70.png"}, {name:"Carmen",src:"m_25030101_70.png"}, {name:"Gravedigger",src:"m_25030201_70.png"}, {name:"Seaman",src:"m_25030301_70.png"}, {name:"Boss",src:"m_25040101_70.png"}, {name:"Millelith",src:"m_25050101_70.png"}, {name:"Millelith",src:"m_25050201_70.png"}, {name:"Pugilist",src:"m_25060101_70.png"}, {name:"Crusher",src:"m_25070101_70.png"}, {name:"Jintou-Ban",src:"m_25080101_70.png"}, {name:"Hitsuke-Ban",src:"m_25080201_70.png"}, {name:"Kikou-Ban",src:"m_25080301_70.png"}, {name:"Maguu Kenki",src:"m_25090101_70.png"}, {name:"Dancing Thunder",src:"m_25100101_70.png"}, {name:"Fiery Might",src:"m_25100201_70.png"}, {name:"Whopperflower",src:"m_26010101_70.png"}, {name:"Whopperflower",src:"m_26010201_70.png"}, {name:"Whopperflower",src:"m_26010301_70.png"}, {name:"Regisvine",src:"m_26020101_70.png"}, {name:"Regisvine",src:"m_26020201_70.png"}, {name:"Geovishap",src:"m_26030101_70.png"}, {name:"Geovishap",src:"m_26040101_70.png"}, {name:"Primo Geo.",src:"m_26050101_70.png"}, {name:"Electro Cicin",src:"m_26060101_70.png"}, {name:"Hydro Cicin",src:"m_26060201_70.png"}, {name:"Cryo Cicin",src:"m_26060301_70.png"}, {name:"Stromterror",src:"m_29010101_70.png"}, {name:"Boreas",src:"m_29020101_70.png"}
  , {name:"Childe",src:"m_29030101_70.png"}, {name:"Azhdaha",src:"m_29040101_70.png"}]

function add(){
  main.innerHTML += `<div class="tier-row">
          <div class="header" contenteditable="true" style="background-color: #87ff7a;"><span>D</span></div>
          <div class="list"></div>
          <div class="setting">
            <button onclick='this.parentElement.parentElement.remove()'>&times;</button>
            <input type="color" onchange='this.parentElement.parentElement.children[0].style.backgroundColor = this.value;' value="#87ff7a"/>
          </div>
        </div>`;
  $(".tier-row .list").sortable({
          placeholder: "item transparent",
          start: function(event, ui){
            ui.placeholder.html($(ui.item).html());
            ui.placeholder.attr('class',$(ui.item).attr('class') + ' transparent');
            if (event.ctrlKey){
              $clone = ui.item.clone().insertBefore(ui.item);
              $clone.attr('style','');
              $clone.on('contextmenu', function(event){
                if (event.ctrlKey){
                  this.remove();
                }
              })
            }
          },
          connectWith: ".list",
        });
  $(".tier-row .list").disableSelection();
}

function makeDeletable(place){
  $(place).on('contextmenu', function(event){
        if (event.ctrlKey){
          this.remove();
        }
  });
}

function generate(data=['char','weapon','enemy']){
  if (data.includes('char')){
    charSpawn.innerHTML = '';
    char.forEach((c)=>{
      const div = document.createElement('div');
      makeDeletable(div);
      div.className = 'item item-character';
      div.innerHTML = `<img src='img/char/${c}.png'><div class='comment' onclick='edit(this);'>C0</div>`;
      charSpawn.appendChild(div);
    })
  }
  
  if (data.includes('weapon')){
    charSpawn.innerHTML = '';
    var k = 0;
    weapons.forEach((w)=>{
      const div = document.createElement('div');
      makeDeletable(div);
      div.className = `item item-${parseInt(w[3]) + 1}-star item-weapon`;
      div.innerHTML = `<img src='img/weapons/${w}'><div class='comment' onclick='edit(this);'>R1</div>`;
      charSpawn.appendChild(div);
    })
  }

  if (data.includes('enemy')){
    charSpawn.innerHTML = '';
    enemies.forEach((e)=>{
      const div = document.createElement('div');
      makeDeletable(div);
      div.className = `item item-enemy`;
      div.innerHTML = `<img src='img/enemies/${e.src}'><div class='name' onclick='edit(this);'>${e.name}</div>`;
      charSpawn.appendChild(div);
    })
  }

  
}

function edit(elem){
  const text = prompt('Comment',elem.innerText);
  if (text && text!='')
    elem.innerText = text;
}

$('#download').on('click', function(){
  $('.setting').hide()
  $('.tier').css('width','fit-content');
  $('.tier').css('min-width','800px');
  html2canvas(document.querySelector(".tier"), {scale:2}).then(canvas => {
    var link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL()
    link.click();
    $('.setting').show()
    $('.tier').css('width','auto');
    $('.tier').css('min-width','');
  });
})

function upload(ev, place){
  ev.preventDefault();
  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        addUpload(file, place);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      addUpload(ev.dataTransfer.files[i], place);
    }
  }
  
}

function dragOverHandler(ev) {
  ev.preventDefault();
}

var namelist = [];

function addUpload(file, place){
  var reader = new FileReader();
            reader.onload = function (e) {
                const div = document.createElement('div');
                makeDeletable(div);
                div.className = 'item';
                div.innerHTML = `<img src='${e.target.result}'><div class='comment' style='display:none;' onclick='edit(this);'>...</div>`;
                place.appendChild(div);
            }
            console.log(file.name);
            namelist.push(file.name);
            reader.readAsDataURL(file);
}

$(document).ready(function() {
    var readURL = function(input) {
        if (input.files) {
          for (var i=0; i<input.files.length; i++){
            addUpload(input.files[i], charSpawn);
          }
        }
    }

    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".data-upload").on('change', function(){
        var f =new FileReader();
        f.onload=function(){
          $('.tier').html(f.result);
          makeSortable();
          makeDeletable('.item');
          $('.list').on('contextmenu', event => event.preventDefault());
        }     
        f.readAsText(this.files[0]);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

function createFile(filename, data) {
  var t = document.createElement('a');
  t.setAttribute('href', 'data:text/plain; charset=utf-8,' + encodeURIComponent(data.replace(/(\r\n|\n|\r|\s\s)/gm, ""))); // 
  t.setAttribute('download', filename);
  t.click();
}

function save(){
  if (confirm('Do you sure to save this data ? ')){
    window.localStorage.setItem('data',$('.tier').html());
    alert('Success : Data saved !');
  }
}

function saveas(){
  createFile('Untitled', $('.tier').html())
}

function load(data=false){
  if (!data){
    if (window.localStorage.getItem('data')){
      $('.tier').html(window.localStorage.getItem('data'));
      makeSortable();
      makeDeletable('.item');
      $('.list').on('contextmenu', event => event.preventDefault());
      $('.tier').on('contextmenu', event => event.preventDefault());
    }else{
      alert('No save data');
    }
  }else{
    $(".data-upload").click();
  }
}

$('.tier').on('contextmenu', function(e){
  if (!e.ctrlKey && !equiping){
    var target = $(e.target);
    if (target.parent('.item').length && !target.parent().hasClass('equipment')){
      var x = target.parent().clone();
      $(charSpawn).append(x);
      target.parent().remove();
    }else{
      console.log(target.parent('.item'));
    }
  }
});