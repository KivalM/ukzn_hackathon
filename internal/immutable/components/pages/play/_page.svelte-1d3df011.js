import{S as ye,i as Ae,s as Ie,e as ve,a as ie,k as W,q as le,H as Ne,h as L,c as se,l as H,m as V,r as ae,n as E,F as N,b as ce,M as de,B as ne,N as Ce,O as Te,P as Pe,t as _e,d as Oe,f as me,g as we,w as Le,x as Re,y as Ke,z as Me}from"../../../chunks/index-3558dd56.js";import{b as Ee}from"../../../chunks/paths-846459bd.js";var ge={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Chess=n.validateFen=n.SQUARES=n.DEFAULT_POSITION=n.KING=n.QUEEN=n.ROOK=n.BISHOP=n.KNIGHT=n.PAWN=n.BLACK=n.WHITE=void 0,n.WHITE="w",n.BLACK="b",n.PAWN="p",n.KNIGHT="n",n.BISHOP="b",n.ROOK="r",n.QUEEN="q",n.KING="k",n.DEFAULT_POSITION="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";const f=-1,k={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"};n.SQUARES=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"];const o={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},h={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},p={b:[16,32,17,15],w:[-16,-32,-17,-15]},S={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},M=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],P=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],R={p:1,n:2,b:4,r:8,q:16,k:32},d="pnbrqkPNBRQK",O=[n.KNIGHT,n.BISHOP,n.ROOK,n.QUEEN],A=7,C=6,I=1,Q=0,m={w:[{square:h.a1,flag:o.QSIDE_CASTLE},{square:h.h1,flag:o.KSIDE_CASTLE}],b:[{square:h.a8,flag:o.QSIDE_CASTLE},{square:h.h8,flag:o.KSIDE_CASTLE}]},B={b:I,w:C},ee=["1-0","0-1","1/2-1/2","*"];function b(v){return v>>4}function K(v){return v&15}function Z(v){return"0123456789".indexOf(v)!==-1}function w(v){const e=K(v),t=b(v);return"abcdefgh".substring(e,e+1)+"87654321".substring(t,t+1)}function U(v){return v===n.WHITE?n.BLACK:n.WHITE}function F(v){const e=[];e[0]="No errors.",e[1]="FEN string must contain six space-delimited fields.",e[2]="6th field (move number) must be a positive integer.",e[3]="5th field (half move counter) must be a non-negative integer.",e[4]="4th field (en-passant square) is invalid.",e[5]="3rd field (castling availability) is invalid.",e[6]="2nd field (side to move) is invalid.",e[7]="1st field (piece positions) does not contain 8 '/'-delimited rows.",e[8]="1st field (piece positions) is invalid [consecutive numbers].",e[9]="1st field (piece positions) is invalid [invalid piece].",e[10]="1st field (piece positions) is invalid [row too large].",e[11]="Illegal en-passant square";const t=v.split(/\s+/);if(t.length!==6)return{valid:!1,errorNumber:1,error:e[1]};const i=parseInt(t[5],10);if(isNaN(i)||i<=0)return{valid:!1,errorNumber:2,error:e[2]};const r=parseInt(t[4],10);if(isNaN(r)||r<0)return{valid:!1,errorNumber:3,error:e[3]};if(!/^(-|[abcdefgh][36])$/.test(t[3]))return{valid:!1,errorNumber:4,error:e[4]};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(t[2]))return{valid:!1,errorNumber:5,error:e[5]};if(!/^(w|b)$/.test(t[1]))return{valid:!1,errorNumber:6,error:e[6]};const s=t[0].split("/");if(s.length!==8)return{valid:!1,errorNumber:7,error:e[7]};for(let c=0;c<s.length;c++){let l=0,a=!1;for(let g=0;g<s[c].length;g++)if(Z(s[c][g])){if(a)return{valid:!1,errorNumber:8,error:e[8]};l+=parseInt(s[c][g],10),a=!0}else{if(!/^[prnbqkPRNBQK]$/.test(s[c][g]))return{valid:!1,errorNumber:9,error:e[9]};l+=1,a=!1}if(l!==8)return{valid:!1,errorNumber:10,error:e[10]}}return t[3][1]=="3"&&t[1]=="w"||t[3][1]=="6"&&t[1]=="b"?{valid:!1,errorNumber:11,error:e[11]}:{valid:!0,errorNumber:0,error:e[0]}}n.validateFen=F;function J(v,e){const t=v.from,i=v.to,r=v.piece;let s=0,c=0,l=0;for(let a=0,g=e.length;a<g;a++){const D=e[a].from,$=e[a].to,u=e[a].piece;r===u&&t!==D&&i===$&&(s++,b(t)===b(D)&&c++,K(t)===K(D)&&l++)}return s>0?c>0&&l>0?w(t):l>0?w(t).charAt(1):w(t).charAt(0):""}function G(v,e,t,i,r,s=void 0,c=o.NORMAL){const l=b(i);if(r===n.PAWN&&(l===A||l===Q))for(let a=0;a<O.length;a++){const g=O[a];v.push({color:e,from:t,to:i,piece:r,captured:s,promotion:g,flags:c|o.PROMOTION})}else v.push({color:e,from:t,to:i,piece:r,captured:s,promotion:void 0,flags:c})}function z(v){let e=v.charAt(0);return e>="a"&&e<="h"?v.match(/[a-h]\d.*[a-h]\d/)?void 0:n.PAWN:(e=e.toLowerCase(),e==="o"?n.KING:e)}function X(v){return v.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class te{constructor(e=n.DEFAULT_POSITION){this._board=new Array(128),this._turn=n.WHITE,this._header={},this._kings={w:f,b:f},this._epSquare=-1,this._halfMoves=0,this._moveNumber=0,this._history=[],this._comments={},this._castling={w:0,b:0},this.load(e)}clear(e=!1){this._board=new Array(128),this._kings={w:f,b:f},this._turn=n.WHITE,this._castling={w:0,b:0},this._epSquare=f,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=e?this._header:{},this._updateSetup(this.fen())}load(e,t=!1){const i=e.split(/\s+/),r=i[0];let s=0;if(!F(e).valid)return!1;this.clear(t);for(let c=0;c<r.length;c++){const l=r.charAt(c);if(l==="/")s+=8;else if(Z(l))s+=parseInt(l,10);else{const a=l<"a"?n.WHITE:n.BLACK;this.put({type:l.toLowerCase(),color:a},w(s)),s++}}return this._turn=i[1],i[2].indexOf("K")>-1&&(this._castling.w|=o.KSIDE_CASTLE),i[2].indexOf("Q")>-1&&(this._castling.w|=o.QSIDE_CASTLE),i[2].indexOf("k")>-1&&(this._castling.b|=o.KSIDE_CASTLE),i[2].indexOf("q")>-1&&(this._castling.b|=o.QSIDE_CASTLE),this._epSquare=i[3]==="-"?f:h[i[3]],this._halfMoves=parseInt(i[4],10),this._moveNumber=parseInt(i[5],10),this._updateSetup(this.fen()),!0}fen(){let e=0,t="";for(let s=h.a8;s<=h.h1;s++){if(this._board[s]){e>0&&(t+=e,e=0);const{color:c,type:l}=this._board[s];t+=c===n.WHITE?l.toUpperCase():l.toLowerCase()}else e++;s+1&136&&(e>0&&(t+=e),s!==h.h1&&(t+="/"),e=0,s+=8)}let i="";this._castling[n.WHITE]&o.KSIDE_CASTLE&&(i+="K"),this._castling[n.WHITE]&o.QSIDE_CASTLE&&(i+="Q"),this._castling[n.BLACK]&o.KSIDE_CASTLE&&(i+="k"),this._castling[n.BLACK]&o.QSIDE_CASTLE&&(i+="q"),i=i||"-";const r=this._epSquare===f?"-":w(this._epSquare);return[t,this._turn,i,r,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(e){this._history.length>0||(e!==n.DEFAULT_POSITION?(this._header.SetUp="1",this._header.FEN=e):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(n.DEFAULT_POSITION)}get(e){return this._board[h[e]]||!1}put({type:e,color:t},i){if(d.indexOf(e.toLowerCase())===-1||!(i in h))return!1;const r=h[i];return e==n.KING&&!(this._kings[t]==f||this._kings[t]==r)?!1:(this._board[r]={type:e,color:t},e===n.KING&&(this._kings[t]=r),this._updateSetup(this.fen()),!0)}remove(e){const t=this.get(e);return delete this._board[h[e]],t&&t.type===n.KING&&(this._kings[t.color]=f),this._updateSetup(this.fen()),t}_attacked(e,t){for(let i=h.a8;i<=h.h1;i++){if(i&136){i+=7;continue}if(this._board[i]===void 0||this._board[i].color!==e)continue;const r=this._board[i],s=i-t,c=s+119;if(M[c]&R[r.type]){if(r.type===n.PAWN){if(s>0){if(r.color===n.WHITE)return!0}else if(r.color===n.BLACK)return!0;continue}if(r.type==="n"||r.type==="k")return!0;const l=P[c];let a=i+l,g=!1;for(;a!==t;){if(this._board[a]!=null){g=!0;break}a+=l}if(!g)return!0}}return!1}_isKingAttacked(e){return this._attacked(U(e),this._kings[e])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const e={b:0,n:0,r:0,q:0,k:0,p:0},t=[];let i=0,r=0;for(let s=h.a8;s<=h.h1;s++){if(r=(r+1)%2,s&136){s+=7;continue}const c=this._board[s];c&&(e[c.type]=c.type in e?e[c.type]+1:1,c.type===n.BISHOP&&t.push(r),i++)}if(i===2)return!0;if(i===3&&(e[n.BISHOP]===1||e[n.KNIGHT]===1))return!0;if(i===e[n.BISHOP]+2){let s=0;const c=t.length;for(let l=0;l<c;l++)s+=t[l];if(s===0||s===c)return!0}return!1}isThreefoldRepetition(){const e=[],t={};let i=!1;for(;;){const r=this._undoMove();if(!r)break;e.push(r)}for(;;){const r=this.fen().split(" ").slice(0,4).join(" ");t[r]=r in t?t[r]+1:1,t[r]>=3&&(i=!0);const s=e.pop();if(s)this._makeMove(s);else break}return i}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:e=!1,square:t=void 0}={}){const i=this._moves({square:t});return e?i.map(r=>this._makePretty(r)):i.map(r=>this._moveToSan(r,i))}_moves({legal:e=!0,piece:t=void 0,square:i=void 0}={}){var r;const s=i?i.toLowerCase():void 0,c=t==null?void 0:t.toLowerCase(),l=[],a=this._turn,g=U(a);let D=h.a8,$=h.h1,u=!1;if(s)if(s in h)D=$=h[s],u=!0;else return[];for(let _=D;_<=$;_++){if(_&136){_+=7;continue}if(!this._board[_]||this._board[_].color===g)continue;const{type:T}=this._board[_];let q;if(T===n.PAWN){if(c&&c!==T)continue;q=_+p[a][0],this._board[q]||(G(l,a,_,q,n.PAWN),q=_+p[a][1],B[a]===b(_)&&!this._board[q]&&G(l,a,_,q,n.PAWN,void 0,o.BIG_PAWN));for(let Y=2;Y<4;Y++)q=_+p[a][Y],!(q&136)&&(((r=this._board[q])===null||r===void 0?void 0:r.color)===g?G(l,a,_,q,n.PAWN,this._board[q].type,o.CAPTURE):q===this._epSquare&&G(l,a,_,q,n.PAWN,n.PAWN,o.EP_CAPTURE))}else{if(c&&c!==T)continue;for(let Y=0,oe=S[T].length;Y<oe;Y++){const y=S[T][Y];for(q=_;q+=y,!(q&136);){if(!this._board[q])G(l,a,_,q,T);else{if(this._board[q].color===a)break;G(l,a,_,q,T,this._board[q].type,o.CAPTURE);break}if(T===n.KNIGHT||T===n.KING)break}}}}if((c===void 0||c===n.KING)&&(!u||$===this._kings[a])){if(this._castling[a]&o.KSIDE_CASTLE){const _=this._kings[a],T=_+2;!this._board[_+1]&&!this._board[T]&&!this._attacked(g,this._kings[a])&&!this._attacked(g,_+1)&&!this._attacked(g,T)&&G(l,a,this._kings[a],T,n.KING,void 0,o.KSIDE_CASTLE)}if(this._castling[a]&o.QSIDE_CASTLE){const _=this._kings[a],T=_-2;!this._board[_-1]&&!this._board[_-2]&&!this._board[_-3]&&!this._attacked(g,this._kings[a])&&!this._attacked(g,_-1)&&!this._attacked(g,T)&&G(l,a,this._kings[a],T,n.KING,void 0,o.QSIDE_CASTLE)}}if(!e)return l;const j=[];for(let _=0,T=l.length;_<T;_++)this._makeMove(l[_]),this._isKingAttacked(a)||j.push(l[_]),this._undoMove();return j}move(e,{sloppy:t=!1}={}){let i=null;if(typeof e=="string")i=this._moveFromSan(e,t);else if(typeof e=="object"){const s=this._moves();for(let c=0,l=s.length;c<l;c++)if(e.from===w(s[c].from)&&e.to===w(s[c].to)&&(!("promotion"in s[c])||e.promotion===s[c].promotion)){i=s[c];break}}if(!i)return null;const r=this._makePretty(i);return this._makeMove(i),r}_push(e){this._history.push({move:e,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(e){const t=this._turn,i=U(t);if(this._push(e),this._board[e.to]=this._board[e.from],delete this._board[e.from],e.flags&o.EP_CAPTURE&&(this._turn===n.BLACK?delete this._board[e.to-16]:delete this._board[e.to+16]),e.promotion&&(this._board[e.to]={type:e.promotion,color:t}),this._board[e.to].type===n.KING){if(this._kings[t]=e.to,e.flags&o.KSIDE_CASTLE){const r=e.to-1,s=e.to+1;this._board[r]=this._board[s],delete this._board[s]}else if(e.flags&o.QSIDE_CASTLE){const r=e.to+1,s=e.to-2;this._board[r]=this._board[s],delete this._board[s]}this._castling[t]=0}if(this._castling[t]){for(let r=0,s=m[t].length;r<s;r++)if(e.from===m[t][r].square&&this._castling[t]&m[t][r].flag){this._castling[t]^=m[t][r].flag;break}}if(this._castling[i]){for(let r=0,s=m[i].length;r<s;r++)if(e.to===m[i][r].square&&this._castling[i]&m[i][r].flag){this._castling[i]^=m[i][r].flag;break}}e.flags&o.BIG_PAWN?t===n.BLACK?this._epSquare=e.to-16:this._epSquare=e.to+16:this._epSquare=f,e.piece===n.PAWN?this._halfMoves=0:e.flags&(o.CAPTURE|o.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,t===n.BLACK&&this._moveNumber++,this._turn=i}undo(){const e=this._undoMove();return e?this._makePretty(e):null}_undoMove(){const e=this._history.pop();if(e===void 0)return null;const t=e.move;this._kings=e.kings,this._turn=e.turn,this._castling=e.castling,this._epSquare=e.epSquare,this._halfMoves=e.halfMoves,this._moveNumber=e.moveNumber;const i=this._turn,r=U(i);if(this._board[t.from]=this._board[t.to],this._board[t.from].type=t.piece,delete this._board[t.to],t.captured)if(t.flags&o.EP_CAPTURE){let s;i===n.BLACK?s=t.to-16:s=t.to+16,this._board[s]={type:n.PAWN,color:r}}else this._board[t.to]={type:t.captured,color:r};if(t.flags&(o.KSIDE_CASTLE|o.QSIDE_CASTLE)){let s,c;t.flags&o.KSIDE_CASTLE?(s=t.to+1,c=t.to-1):(s=t.to-2,c=t.to+1),this._board[s]=this._board[c],delete this._board[c]}return t}pgn({newline:e=`
`,maxWidth:t=0}={}){const i=[];let r=!1;for(const u in this._header)i.push("["+u+' "'+this._header[u]+'"]'+e),r=!0;r&&this._history.length&&i.push(e);const s=u=>{const j=this._comments[this.fen()];if(typeof j<"u"){const _=u.length>0?" ":"";u=`${u}${_}{${j}}`}return u},c=[];for(;this._history.length>0;)c.push(this._undoMove());const l=[];let a="";for(c.length===0&&l.push(s(""));c.length>0;){a=s(a);const u=c.pop();if(!u)break;if(!this._history.length&&u.color==="b"){const j=`${this._moveNumber}. ...`;a=a?`${a} ${j}`:j}else u.color==="w"&&(a.length&&l.push(a),a=this._moveNumber+".");a=a+" "+this._moveToSan(u,this._moves({legal:!0})),this._makeMove(u)}if(a.length&&l.push(s(a)),typeof this._header.Result<"u"&&l.push(this._header.Result),t===0)return i.join("")+l.join(" ");const g=function(){return i.length>0&&i[i.length-1]===" "?(i.pop(),!0):!1},D=function(u,j){for(const _ of j.split(" "))if(!!_){if(u+_.length>t){for(;g();)u--;i.push(e),u=0}i.push(_),u+=_.length,i.push(" "),u++}return g()&&u--,u};let $=0;for(let u=0;u<l.length;u++){if($+l[u].length>t&&l[u].includes("{")){$=D($,l[u]);continue}$+l[u].length>t&&u!==0?(i[i.length-1]===" "&&i.pop(),i.push(e),$=0):u!==0&&(i.push(" "),$++),i.push(l[u]),$+=l[u].length}return i.join("")}header(...e){for(let t=0;t<e.length;t+=2)typeof e[t]=="string"&&typeof e[t+1]=="string"&&(this._header[e[t]]=e[t+1]);return this._header}loadPgn(e,{sloppy:t=!1,newlineChar:i=`\r?
`}={}){function r(y){return y.replace(/\\/g,"\\")}function s(y){const x={},re=y.split(new RegExp(r(i)));let fe="",pe="";for(let he=0;he<re.length;he++){const be=/^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;fe=re[he].replace(be,"$1"),pe=re[he].replace(be,"$2"),fe.trim().length>0&&(x[fe]=pe)}return x}e=e.trim();const l=new RegExp("^(\\[((?:"+r(i)+")|.)*\\])(?:\\s*"+r(i)+"){2}").exec(e),a=l&&l.length>=2?l[1]:"";this.reset();const g=s(a);let D="";for(const y in g)y.toLowerCase()==="fen"&&(D=g[y]),this.header(y,g[y]);if(t){if(D&&!this.load(D,!0))return!1}else if(g.SetUp==="1"&&!("FEN"in g&&this.load(g.FEN,!0)))return!1;function $(y){return Array.from(y).map(function(x){return x.charCodeAt(0)<128?x.charCodeAt(0).toString(16):encodeURIComponent(x).replace(/%/g,"").toLowerCase()}).join("")}function u(y){return y.length==0?"":decodeURIComponent("%"+(y.match(/.{1,2}/g)||[]).join("%"))}const j=function(y){return y=y.replace(new RegExp(r(i),"g")," "),`{${$(y.slice(1,y.length-1))}}`},_=function(y){if(y.startsWith("{")&&y.endsWith("}"))return u(y.slice(1,y.length-1))};let T=e.replace(a,"").replace(new RegExp(`({[^}]*})+?|;([^${r(i)}]*)`,"g"),function(y,x,re){return x!==void 0?j(x):" "+j(`{${re.slice(1)}}`)}).replace(new RegExp(r(i),"g")," ");const q=/(\([^()]+\))+?/g;for(;q.test(T);)T=T.replace(q,"");T=T.replace(/\d+\.(\.\.)?/g,""),T=T.replace(/\.\.\./g,""),T=T.replace(/\$\d+/g,"");let Y=T.trim().split(new RegExp(/\s+/));Y=Y.join(",").replace(/,,+/g,",").split(",");let oe="";for(let y=0;y<Y.length;y++){const x=_(Y[y]);if(x!==void 0){this._comments[this.fen()]=x;continue}const re=this._moveFromSan(Y[y],t);if(re==null)if(ee.indexOf(Y[y])>-1)oe=Y[y];else return!1;else oe="",this._makeMove(re)}return oe&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",oe),!0}_moveToSan(e,t){let i="";if(e.flags&o.KSIDE_CASTLE)i="O-O";else if(e.flags&o.QSIDE_CASTLE)i="O-O-O";else{if(e.piece!==n.PAWN){const r=J(e,t);i+=e.piece.toUpperCase()+r}e.flags&(o.CAPTURE|o.EP_CAPTURE)&&(e.piece===n.PAWN&&(i+=w(e.from)[0]),i+="x"),i+=w(e.to),e.promotion&&(i+="="+e.promotion.toUpperCase())}return this._makeMove(e),this.isCheck()&&(this.isCheckmate()?i+="#":i+="+"),this._undoMove(),i}_moveFromSan(e,t=!1){const i=X(e);let r=z(i),s=this._moves({legal:!0,piece:r});for(let u=0,j=s.length;u<j;u++)if(i===X(this._moveToSan(s[u],s)))return s[u];if(!t)return null;let c,l,a,g,D,$=!1;l=i.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),l?(c=l[1],a=l[2],g=l[3],D=l[4],a.length==1&&($=!0)):(l=i.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),l&&(c=l[1],a=l[2],g=l[3],D=l[4],a.length==1&&($=!0))),r=z(i),s=this._moves({legal:!0,piece:c||r});for(let u=0,j=s.length;u<j;u++)if(a&&g){if((!c||c.toLowerCase()==s[u].piece)&&h[a]==s[u].from&&h[g]==s[u].to&&(!D||D.toLowerCase()==s[u].promotion))return s[u];if($){const _=w(s[u].from);if((!c||c.toLowerCase()==s[u].piece)&&h[g]==s[u].to&&(a==_[0]||a==_[1])&&(!D||D.toLowerCase()==s[u].promotion))return s[u]}}return null}ascii(){let e=`   +------------------------+
`;for(let t=h.a8;t<=h.h1;t++){if(K(t)===0&&(e+=" "+"87654321"[b(t)]+" |"),this._board[t]){const i=this._board[t].type,s=this._board[t].color===n.WHITE?i.toUpperCase():i.toLowerCase();e+=" "+s+" "}else e+=" . ";t+1&136&&(e+=`|
`,t+=8)}return e+=`   +------------------------+
`,e+="     a  b  c  d  e  f  g  h",e}perft(e){const t=this._moves({legal:!1});let i=0;const r=this._turn;for(let s=0,c=t.length;s<c;s++)this._makeMove(t[s]),this._isKingAttacked(r)||(e-1>0?i+=this.perft(e-1):i++),this._undoMove();return i}_makePretty(e){const{color:t,piece:i,from:r,to:s,flags:c,captured:l,promotion:a}=e;let g="";for(const $ in o)o[$]&c&&(g+=k[$]);const D={color:t,piece:i,from:w(r),to:w(s),san:this._moveToSan(e,this._moves({legal:!0})),flags:g};return l&&(D.captured=l),a&&(D.promotion=a),D}turn(){return this._turn}board(){const e=[];let t=[];for(let i=h.a8;i<=h.h1;i++)this._board[i]==null?t.push(null):t.push({square:w(i),type:this._board[i].type,color:this._board[i].color}),i+1&136&&(e.push(t),t=[],i+=8);return e}squareColor(e){if(e in h){const t=h[e];return(b(t)+K(t))%2===0?"light":"dark"}return null}history({verbose:e=!1}={}){const t=[],i=[];for(;this._history.length>0;)t.push(this._undoMove());for(;;){const r=t.pop();if(!r)break;e?i.push(this._makePretty(r)):i.push(this._moveToSan(r,this._moves())),this._makeMove(r)}return i}_pruneComments(){const e=[],t={},i=r=>{r in this._comments&&(t[r]=this._comments[r])};for(;this._history.length>0;)e.push(this._undoMove());for(i(this.fen());;){const r=e.pop();if(!r)break;this._makeMove(r),i(this.fen())}this._comments=t}getComment(){return this._comments[this.fen()]}setComment(e){this._comments[this.fen()]=e.replace("{","[").replace("}","]")}deleteComment(){const e=this._comments[this.fen()];return delete this._comments[this.fen()],e}getComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>({fen:e,comment:this._comments[e]}))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>{const t=this._comments[e];return delete this._comments[e],{fen:e,comment:t}})}}n.Chess=te})(ge);const{document:ue}=Pe;function ke(n,f,k){const o=n.slice();return o[16]=f[k],o}function Se(n){let f;return{c(){f=W("link"),this.h()},l(k){f=H(k,"LINK",{rel:!0,as:!0,href:!0}),this.h()},h(){E(f,"rel","preload"),E(f,"as","image"),E(f,"href",n[16])},m(k,o){ce(k,f,o)},p:ne,d(k){k&&L(f)}}}function qe(n){let f,k,o,h,p,S,M,P,R,d,O,A=n[1],C=[];for(let I=0;I<A.length;I+=1)C[I]=Se(ke(n,A,I));return{c(){for(let I=0;I<C.length;I+=1)C[I].c();f=ve(),k=ie(),o=W("section"),h=W("button"),p=le("DRAW"),S=ie(),M=W("div"),P=W("div"),R=W("canvas"),this.h()},l(I){const Q=Ne("svelte-12u5s6x",ue.head);for(let K=0;K<C.length;K+=1)C[K].l(Q);f=ve(),Q.forEach(L),k=se(I),o=H(I,"SECTION",{});var m=V(o);h=H(m,"BUTTON",{});var B=V(h);p=ae(B,"DRAW"),B.forEach(L),S=se(m),M=H(m,"DIV",{id:!0});var ee=V(M);P=H(ee,"DIV",{id:!0,class:!0});var b=V(P);R=H(b,"CANVAS",{id:!0,height:!0,width:!0}),V(R).forEach(L),b.forEach(L),ee.forEach(L),m.forEach(L),this.h()},h(){E(R,"id","canvas"),E(R,"height",n[0]),E(R,"width",n[0]),E(P,"id","boardEl"),E(P,"class","chessboard"),E(M,"id","board")},m(I,Q){for(let m=0;m<C.length;m+=1)C[m].m(ue.head,null);N(ue.head,f),ce(I,k,Q),ce(I,o,Q),N(o,h),N(h,p),N(o,S),N(o,M),N(M,P),N(P,R),d||(O=[de(h,"click",n[2]),de(R,"click",n[3])],d=!0)},p(I,[Q]){if(Q&2){A=I[1];let m;for(m=0;m<A.length;m+=1){const B=ke(I,A,m);C[m]?C[m].p(B,Q):(C[m]=Se(B),C[m].c(),C[m].m(f.parentNode,f))}for(;m<C.length;m+=1)C[m].d(1);C.length=A.length}Q&1&&E(R,"height",I[0]),Q&1&&E(R,"width",I[0])},i:ne,o:ne,d(I){Ce(C,I),L(f),I&&L(k),I&&L(o),d=!1,Te(O)}}}function De(n,f,k){let o,h,p={},S=new ge.Chess,M=!1,P=null,R=null,{size:d=800}=f,O=0,A=[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1]],C="rbnqkpRBNQKP".split(""),I=C.map(b=>`${Ee}/chess/${b}.svg`);for(let b of C)p[b]=new Image,p[b].src=`${Ee}/chess/${b}.svg`,p[b].onload=()=>{O++,O===C.length&&(ready=!0)};function Q(){o=document.getElementById("canvas"),h=o.getContext("2d"),S=new ge.Chess,m(),B(S.fen())}function m(){for(let b=0;b<8;b++)for(let K=0;K<8;K++)(b+K)%2==0?h.fillStyle="#f0d9b5":h.fillStyle="#b58863",h.fillRect(b*d/8,K*d/8,d/8,d/8);h.fill()}function B(b){let K=0,Z=0;for(let w=0;w<b.length;w++){let U=b[w];if(U=="/")K=0,Z++;else{if(U==" ")break;isNaN(U)?(h.drawImage(p[U],K*d/8,Z*d/8,d/8,d/8),K++):K+=parseInt(U)}}}function ee(b){let K=Math.floor(b.offsetX*8/d),Z=Math.floor(b.offsetY*8/d),w=String.fromCharCode(97+K),U=8-Z,F=w+U,J=S.get(F);if(!M)S.turn()=="w"?J&&J.color=="w"&&(M=!0):J&&J.color=="b"&&(M=!0),M&&(P=J,R=F,console.log("starting animation"),document.getElementById("canvas").addEventListener("mousemove",G=>{let z=G.offsetX,X=G.offsetY;h.clearRect(0,0,o.width,o.height),m(),B(S.fen());let te=P.type;P.color=="w"&&(te=te.toUpperCase()),h.drawImage(p[te],z-d/16,X-d/16,d/8,d/8),P==null&&document.getElementById("canvas").removeEventListener("mousemove",v=>{})}));else{let G={from:R,to:F};if(console.log(G),S.move(G)){console.log("move made");let z=R.charCodeAt(0)-97,X=8-parseInt(R[1]),te=F.charCodeAt(0)-97,v=8-parseInt(F[1]);A[v][te]+=A[X][z],A[X][z]=0;for(let e=0;e<8;e++)for(let t=0;t<8;t++)if(A[e][t]>2){console.log(A[e][t]);let i=S.remove(F);switch(console.log("removed: "+i),i.type){case"p":A[e][t]=1,S.put({type:"b",color:i.color},F);break;case"b":A[e][t]=2,S.put({type:"n",color:i.color},F);break;case"n":A[e][t]=3,S.put({type:"r",color:i.color},F);break;case"r":A[e][t]=4,S.put({type:"q",color:i.color},F);break;case"q":A[e][t]=4,S.put({type:"q",color:i.color},F);break;case"k":A[e][t]=4,S.put({type:"k",color:i.color},F);break}}}else console.log("invalid move");M=!1,P=null,R=null,h.clearRect(0,0,o.width,o.height),document.getElementById("canvas").removeEventListener("mousemove",z=>{}),m(),B(S.fen())}m(),B(S.fen()),console.log("x: "+w+" y: "+U)}return n.$$set=b=>{"size"in b&&k(0,d=b.size)},[d,I,Q,ee]}class Be extends ye{constructor(f){super(),Ae(this,f,De,qe,Ie,{size:0})}}function Ue(n){let f,k,o,h,p,S,M,P,R,d,O,A,C,I,Q,m,B,ee,b,K,Z,w,U,F,J,G;return{c(){f=W("div"),k=W("h3"),o=le("Game Setup"),h=ie(),p=W("div"),S=W("div"),M=W("span"),P=le("Game Type"),R=ie(),d=W("div"),O=W("input"),A=ie(),C=W("label"),I=le("Offline"),Q=ie(),m=W("div"),B=W("input"),ee=ie(),b=W("label"),K=le("Online (todo)"),Z=ie(),w=W("div"),U=W("button"),F=le("Go"),this.h()},l(z){f=H(z,"DIV",{class:!0});var X=V(f);k=H(X,"H3",{class:!0});var te=V(k);o=ae(te,"Game Setup"),te.forEach(L),h=se(X),p=H(X,"DIV",{class:!0});var v=V(p);S=H(v,"DIV",{class:!0});var e=V(S);M=H(e,"SPAN",{class:!0});var t=V(M);P=ae(t,"Game Type"),t.forEach(L),e.forEach(L),R=se(v),d=H(v,"DIV",{class:!0});var i=V(d);O=H(i,"INPUT",{id:!0,type:!0,name:!0,class:!0}),A=se(i),C=H(i,"LABEL",{for:!0,class:!0});var r=V(C);I=ae(r,"Offline"),r.forEach(L),i.forEach(L),Q=se(v),m=H(v,"DIV",{class:!0});var s=V(m);B=H(s,"INPUT",{id:!0,type:!0,name:!0,class:!0}),ee=se(s),b=H(s,"LABEL",{for:!0,class:!0});var c=V(b);K=ae(c,"Online (todo)"),c.forEach(L),s.forEach(L),Z=se(v),w=H(v,"DIV",{class:!0});var l=V(w);U=H(l,"BUTTON",{type:!0,class:!0});var a=V(U);F=ae(a,"Go"),a.forEach(L),l.forEach(L),v.forEach(L),X.forEach(L),this.h()},h(){E(k,"class","text-3xl font-bold dark:text-white pb-4 text-center"),E(M,"class","text-xl block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"),E(S,"class","mb-6"),E(O,"id","default-radio-1"),O.checked=!0,E(O,"type","radio"),O.value="checked",E(O,"name","default-radio"),E(O,"class","w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"),E(C,"for","default-radio-1"),E(C,"class","ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"),E(d,"class","flex items-center mb-4"),B.disabled=!0,E(B,"id","default-radio-2"),E(B,"type","radio"),B.value="",E(B,"name","default-radio"),E(B,"class","w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"),E(b,"for","default-radio-2"),E(b,"class","ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"),E(m,"class","flex items-center"),E(U,"type","button"),E(U,"class","text-white bg-green-700 hover:bg-blue-800 m-4 r-0 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"),E(w,"class","flex items-center"),E(p,"class","shadow bg-grey-400 p-10 rounded flex flex-col items-start"),E(f,"class","shadow-xl border-gray-300 border-2 rounded-lg p-20 ")},m(z,X){ce(z,f,X),N(f,k),N(k,o),N(f,h),N(f,p),N(p,S),N(S,M),N(M,P),N(p,R),N(p,d),N(d,O),N(d,A),N(d,C),N(C,I),N(p,Q),N(p,m),N(m,B),N(m,ee),N(m,b),N(b,K),N(p,Z),N(p,w),N(w,U),N(U,F),J||(G=de(U,"click",n[1]),J=!0)},p:ne,i:ne,o:ne,d(z){z&&L(f),J=!1,G()}}}function $e(n){let f,k;return f=new Be({}),{c(){Le(f.$$.fragment)},l(o){Re(f.$$.fragment,o)},m(o,h){Ke(f,o,h),k=!0},p:ne,i(o){k||(me(f.$$.fragment,o),k=!0)},o(o){_e(f.$$.fragment,o),k=!1},d(o){Me(f,o)}}}function We(n){let f,k,o,h,p,S;const M=[$e,Ue],P=[];function R(d,O){return d[0]?0:1}return h=R(n),p=P[h]=M[h](n),{c(){f=W("meta"),k=ie(),o=W("div"),p.c(),this.h()},l(d){const O=Ne("svelte-1ds1qyu",document.head);f=H(O,"META",{name:!0,content:!0}),O.forEach(L),k=se(d),o=H(d,"DIV",{class:!0});var A=V(o);p.l(A),A.forEach(L),this.h()},h(){document.title="About",E(f,"name","description"),E(f,"content","About this app"),E(o,"class","flex justify-center")},m(d,O){N(document.head,f),ce(d,k,O),ce(d,o,O),P[h].m(o,null),S=!0},p(d,[O]){let A=h;h=R(d),h===A?P[h].p(d,O):(we(),_e(P[A],1,1,()=>{P[A]=null}),Oe(),p=P[h],p?p.p(d,O):(p=P[h]=M[h](d),p.c()),me(p,1),p.m(o,null))},i(d){S||(me(p),S=!0)},o(d){_e(p),S=!1},d(d){L(f),d&&L(k),d&&L(o),P[h].d()}}}function He(n,f,k){let o=!1;return[o,()=>{k(0,o=!0)}]}class Ge extends ye{constructor(f){super(),Ae(this,f,He,We,Ie,{})}}export{Ge as default};
