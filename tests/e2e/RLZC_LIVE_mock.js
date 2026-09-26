(function(){
  var P=[['路过的D级','这个主播好冷静啊，第一次进S级？'],['钟楼老观众','别信那个穿灰外套的，上一届就是他'],['匿名','装什么装，肯定是抱大腿进来的'],
  ['小满','祝平安出来！！'],['数据党','按往届，第一夜死一个的概率七成'],['阿柒','谈缘怎么又在，他是住在钟楼里了吗'],['路人甲','听说她积分是借的，真的假的'],
  ['夜班保安','这楼梯我看着都腿软'],['柠檬汁','凭什么她一进来就有S级带着'],['理性讨论','先别吵，看曲柄在谁手里'],['好运来','冲啊主播！'],['吃瓜','前面说借积分的拿出证据来'],
  ['钟楼老观众','注意听钟声，每次少一下'],['小满','主播别一个人上楼啊'],['匿名','演的吧，这反应太假了']];
  var TIPN=['小满','好运来','夜班保安','一个路过的A级','钟楼老观众','匿名'];
  var TIPA=[10,20,50,100,200,500,1000];
  var st={on:true,canToggle:false,scope:'instance',viewers:12840,heat:68,tipTotal:1860,injectToAI:false,feed:[],lastTip:null};
  var mode=(window.RLZC_MOCK_MODE||'instance');
  if(mode==='corridor'){st={on:false,canToggle:true,scope:'corridor',viewers:0,heat:0,tipTotal:0,injectToAI:false,feed:[],lastTip:null};}
  var id=0,subs=[],i=0;
  function push(m){m.id=++id;st.feed.push(m);if(st.feed.length>60)st.feed.shift();}
  if(mode!=='corridor'){for(var k=0;k<9;k++){var p=P[k];push({t:'msg',name:p[0],text:p[1]});}
    push({t:'tip',name:'小满',amount:500,net:300});st.lastTip={id:id,net:300};}
  function emit(){subs.forEach(function(f){try{f();}catch(e){}});}
  setInterval(function(){
    if(!st.on)return;
    i++;
    if(i%5===0){var a=TIPA[Math.floor(Math.random()*TIPA.length)]*(st.scope==='corridor'?.3:1);a=Math.max(10,Math.round(a/10)*10);var net=Math.round(a*.6);
      push({t:'tip',name:TIPN[Math.floor(Math.random()*TIPN.length)],amount:a,net:net});st.tipTotal+=net;st.lastTip={id:id,net:net};}
    else{var p=P[Math.floor(Math.random()*P.length)];push({t:'msg',name:p[0],text:p[1]});}
    st.viewers=Math.max(80,Math.round(st.viewers*(0.97+Math.random()*0.06)));
    st.heat=Math.max(5,Math.min(100,st.heat+(Math.random()*10-4.5)));
    emit();
  },1600);
  window.RLZC_LIVE={
    get:function(){return {on:st.on,canToggle:st.canToggle,scope:st.scope,viewers:st.viewers,heat:st.heat,tipTotal:st.tipTotal,injectToAI:st.injectToAI,feed:st.feed.slice(),lastTip:st.lastTip};},
    subscribe:function(f){subs.push(f);return function(){subs=subs.filter(function(x){return x!==f;});};},
    toggle:function(){if(!st.canToggle)return false;st.on=!st.on;
      if(st.on){st.viewers=860;st.heat=22;push({t:'sys',text:'开播了。回廊里的观众比副本少一些。'});}
      else{push({t:'sys',text:'已下播。'});}
      emit();return true;}
  };
})();
