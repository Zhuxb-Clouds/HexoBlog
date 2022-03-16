let subtitle = document.getElementById('subtitle')
var mottoText = document.createElement('div');

let motto = ["解剑放舟清波上，不羡鸳鸯不羡仙。","不会飞的猪，就只是一只普通的猪而已。","他日我若为青帝，报与桃花一处开。"]
// 标题界面文字排版布局
mottoText.setAttribute('class','motto')
mottoText.innerHTML = motto[Math.floor(Math.random()*3)]

var intrduce = document.createElement('div');
intrduce.setAttribute('class','intrduce')
intrduce.innerHTML = "I am thinking of aurochs and angels, the secret of durable pigments, prophetic sonnets, the refuge of art. And this is the only immortality you and I may share, my Lolita."
// console.log(subtitle,mottoText,intrduce);

subtitle.appendChild(mottoText);
subtitle.appendChild(intrduce);


let myName = document.getElementsByClassName('author-info__name')
myName.innerText = '朱仙变'


//标题界面视频蒙版实现。

let webBg = document.getElementById('nav')
var video = document.createElement('video');
video.setAttribute('muted','')
video.setAttribute('autoplay','autoplay')
video.setAttribute('src','https://cdn.jsdelivr.net/gh/Zhuxb-Clouds/PicDepot/img/202203170400135.mp4')
video.setAttribute('loop','')
var parentDiv = webBg.parentNode;
//将视频设置为非自动播放，而是通过按钮来调用。
function playVideo(){
    parentDiv.insertBefore(video,webBg)
    document.querySelector('video').play();
    parentDiv.removeChild(document.getElementById('site-info'));

}


// vButton.addEventListener('click',playVideo(),false)
var vButton = document.createElement('button')
vButton.setAttribute('OnClick','playVideo()')
vButton.setAttribute('id','videoButton')
vButton.innerText = "More..."
subtitle.appendChild(vButton);
