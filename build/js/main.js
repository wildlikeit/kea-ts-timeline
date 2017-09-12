(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';// OBJECTS
// STATIC PRIMITIVES
var staticPrimitives={scene:document.querySelector('#a-scene'),skybox:document.querySelector('#skybox'),camera:document.querySelector('#camera')// DYNAMIC PRIMITIVES
};var dynamicPrimitives={timeline:document.querySelector('#timeline')};// DATA
var timelineData=[{year:1955,description:'He said this one thing',objSrc:'#lampObj'},{year:1985,description:'He said this two thing',objSrc:'#lampObj'},{year:2005,description:'He said this three thing',objSrc:'#lampObj'}];// FUNCTIONS
function animateTimeline(){}// INITIALIZE CAMERA N STUFF
staticPrimitives.camera.setAttribute('position',timelineData.length*6.6667+' 0.5 4');staticPrimitives.camera.setAttribute('rotation','-5 0 0');// Setting attributes of stuff
for(var i=0;i<timelineData.length;i++){// Elements
var dataContainer=document.createElement('a-entity');var ground=document.createElement('a-box');var cylinder=document.createElement('a-cylinder');var text=document.createElement('a-text');var lamp=document.createElement('a-entity');// Animation creation
var timelineAnimation=document.createElement('a-animation');// constants
var posX=i*2;var cylHeight=timelineData.length*6.6667;// Attributes
// Container
dataContainer.setAttribute('id',timelineData[i].year);dataContainer.setAttribute('position',posX+'0 0');// Timeline animation
timelineAnimation.setAttribute('attribute','position');timelineAnimation.setAttribute('dur','5000');timelineAnimation.setAttribute('fill','forwards');timelineAnimation.setAttribute('ease','ease-cubic');timelineAnimation.setAttribute('to',cylHeight+' 0 0');// Text
text.setAttribute('value',timelineData[i].description);text.setAttribute('position','0 1 0.8');text.setAttribute('color','white');text.setAttribute('align','center');// Ground
// Attributes
ground.setAttribute('height','0.05');ground.setAttribute('width','3');ground.setAttribute('depth','1');ground.setAttribute('class','tl-ground');ground.setAttribute('color','#ffffff');// Cylinder
cylinder.setAttribute('rotation','0 0 90');cylinder.setAttribute('height',cylHeight);cylinder.setAttribute('radius','0.05');cylinder.setAttribute('color','#777777');// Lamp
lamp.setAttribute('scale','0.0005 0.0005 0.0005');lamp.setAttribute('material','color: blue');lamp.setAttribute('obj-model','obj: '+timelineData[i].objSrc);lamp.setAttribute('position','-1 0 0');// Appending to container
dataContainer.appendChild(ground);dataContainer.appendChild(cylinder);dataContainer.appendChild(text);dataContainer.appendChild(lamp);dynamicPrimitives.timeline.appendChild(dataContainer);}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLGFBRUE7QUFFQTtBQUNBLEdBQUksa0JBQW1CLENBQ3JCLE1BQU8sU0FBUyxhQUFULENBQXVCLFVBQXZCLENBRGMsQ0FFckIsT0FBUSxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FGYSxDQUdyQixPQUFRLFNBQVMsYUFBVCxDQUF1QixTQUF2QixDQUdWO0FBTnVCLENBQXZCLENBT0EsR0FBSSxtQkFBb0IsQ0FDdEIsU0FBVSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FEWSxDQUF4QixDQUlBO0FBQ0EsR0FBSSxjQUFlLENBQ2pCLENBQ0UsS0FBTSxJQURSLENBRUUsWUFBYSx3QkFGZixDQUdFLE9BQVEsVUFIVixDQURpQixDQU1qQixDQUNFLEtBQU0sSUFEUixDQUVFLFlBQWEsd0JBRmYsQ0FHRSxPQUFRLFVBSFYsQ0FOaUIsQ0FXakIsQ0FDRSxLQUFNLElBRFIsQ0FFRSxZQUFhLDBCQUZmLENBR0UsT0FBUSxVQUhWLENBWGlCLENBQW5CLENBa0JBO0FBQ0EsUUFBUyxnQkFBVCxFQUEyQixDQUUxQixDQUVEO0FBQ0EsaUJBQWlCLE1BQWpCLENBQXdCLFlBQXhCLENBQXFDLFVBQXJDLENBQWtELGFBQWEsTUFBYixDQUFzQixNQUF2QixDQUFpQyxRQUFsRixFQUNBLGlCQUFpQixNQUFqQixDQUF3QixZQUF4QixDQUFxQyxVQUFyQyxDQUFpRCxRQUFqRCxFQUVBO0FBQ0EsSUFBSyxHQUFJLEdBQUksQ0FBYixDQUFnQixFQUFJLGFBQWEsTUFBakMsQ0FBeUMsR0FBekMsQ0FBOEMsQ0FFNUM7QUFDQSxHQUFJLGVBQWdCLFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUFwQixDQUNBLEdBQUksUUFBUyxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYixDQUNBLEdBQUksVUFBVyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZixDQUNBLEdBQUksTUFBTyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWCxDQUNBLEdBQUksTUFBTyxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBWCxDQUVBO0FBQ0EsR0FBSSxtQkFBb0IsU0FBUyxhQUFULENBQXVCLGFBQXZCLENBQXhCLENBRUE7QUFDQSxHQUFJLE1BQU8sRUFBSSxDQUFmLENBQ0EsR0FBSSxXQUFZLGFBQWEsTUFBYixDQUFzQixNQUF0QyxDQUVBO0FBRUE7QUFDQSxjQUFjLFlBQWQsQ0FBMkIsSUFBM0IsQ0FBaUMsYUFBYSxDQUFiLEVBQWdCLElBQWpELEVBQ0EsY0FBYyxZQUFkLENBQTJCLFVBQTNCLENBQXVDLEtBQU8sS0FBOUMsRUFFQTtBQUNBLGtCQUFrQixZQUFsQixDQUErQixXQUEvQixDQUE0QyxVQUE1QyxFQUNBLGtCQUFrQixZQUFsQixDQUErQixLQUEvQixDQUFzQyxNQUF0QyxFQUNBLGtCQUFrQixZQUFsQixDQUErQixNQUEvQixDQUF1QyxVQUF2QyxFQUNBLGtCQUFrQixZQUFsQixDQUErQixNQUEvQixDQUF1QyxZQUF2QyxFQUNBLGtCQUFrQixZQUFsQixDQUErQixJQUEvQixDQUFxQyxVQUFZLE1BQWpELEVBRUE7QUFDQSxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBMkIsYUFBYSxDQUFiLEVBQWdCLFdBQTNDLEVBQ0EsS0FBSyxZQUFMLENBQWtCLFVBQWxCLENBQThCLFNBQTlCLEVBQ0EsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQTJCLE9BQTNCLEVBQ0EsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQTJCLFFBQTNCLEVBRUE7QUFDQTtBQUNBLE9BQU8sWUFBUCxDQUFvQixRQUFwQixDQUE4QixNQUE5QixFQUNBLE9BQU8sWUFBUCxDQUFvQixPQUFwQixDQUE2QixHQUE3QixFQUNBLE9BQU8sWUFBUCxDQUFvQixPQUFwQixDQUE2QixHQUE3QixFQUNBLE9BQU8sWUFBUCxDQUFvQixPQUFwQixDQUE2QixXQUE3QixFQUNBLE9BQU8sWUFBUCxDQUFvQixPQUFwQixDQUE2QixTQUE3QixFQUVBO0FBQ0EsU0FBUyxZQUFULENBQXNCLFVBQXRCLENBQWtDLFFBQWxDLEVBQ0EsU0FBUyxZQUFULENBQXNCLFFBQXRCLENBQWdDLFNBQWhDLEVBQ0EsU0FBUyxZQUFULENBQXNCLFFBQXRCLENBQWdDLE1BQWhDLEVBQ0EsU0FBUyxZQUFULENBQXNCLE9BQXRCLENBQStCLFNBQS9CLEVBRUE7QUFDQSxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBMkIsc0JBQTNCLEVBQ0EsS0FBSyxZQUFMLENBQWtCLFVBQWxCLENBQThCLGFBQTlCLEVBQ0EsS0FBSyxZQUFMLENBQWtCLFdBQWxCLENBQStCLFFBQVUsYUFBYSxDQUFiLEVBQWdCLE1BQXpELEVBQ0EsS0FBSyxZQUFMLENBQWtCLFVBQWxCLENBQThCLFFBQTlCLEVBRUE7QUFDQSxjQUFjLFdBQWQsQ0FBMEIsTUFBMUIsRUFDQSxjQUFjLFdBQWQsQ0FBMEIsUUFBMUIsRUFDQSxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFDQSxjQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFDQSxrQkFBa0IsUUFBbEIsQ0FBMkIsV0FBM0IsQ0FBdUMsYUFBdkMsRUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIE9CSkVDVFNcblxuLy8gU1RBVElDIFBSSU1JVElWRVNcbnZhciBzdGF0aWNQcmltaXRpdmVzID0ge1xuICBzY2VuZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Etc2NlbmUnKSxcbiAgc2t5Ym94OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2t5Ym94JyksXG4gIGNhbWVyYTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYScpXG59XG5cbi8vIERZTkFNSUMgUFJJTUlUSVZFU1xudmFyIGR5bmFtaWNQcmltaXRpdmVzID0ge1xuICB0aW1lbGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWVsaW5lJylcbn07XG5cbi8vIERBVEFcbnZhciB0aW1lbGluZURhdGEgPSBbXG4gIHtcbiAgICB5ZWFyOiAxOTU1LFxuICAgIGRlc2NyaXB0aW9uOiAnSGUgc2FpZCB0aGlzIG9uZSB0aGluZycsXG4gICAgb2JqU3JjOiAnI2xhbXBPYmonXG4gIH0sXG4gIHtcbiAgICB5ZWFyOiAxOTg1LFxuICAgIGRlc2NyaXB0aW9uOiAnSGUgc2FpZCB0aGlzIHR3byB0aGluZycsXG4gICAgb2JqU3JjOiAnI2xhbXBPYmonXG4gIH0sXG4gIHtcbiAgICB5ZWFyOiAyMDA1LFxuICAgIGRlc2NyaXB0aW9uOiAnSGUgc2FpZCB0aGlzIHRocmVlIHRoaW5nJyxcbiAgICBvYmpTcmM6ICcjbGFtcE9iaidcbiAgfVxuXTtcblxuLy8gRlVOQ1RJT05TXG5mdW5jdGlvbiBhbmltYXRlVGltZWxpbmUoKcKge1xuXG59XG5cbi8vIElOSVRJQUxJWkUgQ0FNRVJBIE4gU1RVRkZcbnN0YXRpY1ByaW1pdGl2ZXMuY2FtZXJhLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAodGltZWxpbmVEYXRhLmxlbmd0aCAqIDYuNjY2NykgKyAnIDAuNSA0Jyk7XG5zdGF0aWNQcmltaXRpdmVzLmNhbWVyYS5zZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJywgJy01IDAgMCcpO1xuXG4vLyBTZXR0aW5nIGF0dHJpYnV0ZXMgb2Ygc3R1ZmZcbmZvciAodmFyIGkgPSAwOyBpIDwgdGltZWxpbmVEYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgLy8gRWxlbWVudHNcbiAgdmFyIGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xuICB2YXIgZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1ib3gnKTtcbiAgdmFyIGN5bGluZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1jeWxpbmRlcicpO1xuICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtdGV4dCcpO1xuICB2YXIgbGFtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5Jyk7XG5cbiAgLy8gQW5pbWF0aW9uIGNyZWF0aW9uXG4gIHZhciB0aW1lbGluZUFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtYW5pbWF0aW9uJyk7XG5cbiAgLy8gY29uc3RhbnRzXG4gIHZhciBwb3NYID0gaSAqIDI7XG4gIHZhciBjeWxIZWlnaHQgPSB0aW1lbGluZURhdGEubGVuZ3RoICogNi42NjY3O1xuXG4gIC8vIEF0dHJpYnV0ZXNcblxuICAvLyBDb250YWluZXJcbiAgZGF0YUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgdGltZWxpbmVEYXRhW2ldLnllYXIpO1xuICBkYXRhQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBwb3NYICsgJzAgMCcpO1xuXG4gIC8vIFRpbWVsaW5lIGFuaW1hdGlvblxuICB0aW1lbGluZUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2F0dHJpYnV0ZScsICdwb3NpdGlvbicpO1xuICB0aW1lbGluZUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2R1cicsICc1MDAwJyk7XG4gIHRpbWVsaW5lQW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdmb3J3YXJkcycpO1xuICB0aW1lbGluZUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2Vhc2UnLCAnZWFzZS1jdWJpYycpO1xuICB0aW1lbGluZUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ3RvJywgY3lsSGVpZ2h0ICsgJyAwIDAnKTtcblxuICAvLyBUZXh0XG4gIHRleHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRpbWVsaW5lRGF0YVtpXS5kZXNjcmlwdGlvbik7XG4gIHRleHQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICcwIDEgMC44Jyk7XG4gIHRleHQuc2V0QXR0cmlidXRlKCdjb2xvcicsICd3aGl0ZScpO1xuICB0ZXh0LnNldEF0dHJpYnV0ZSgnYWxpZ24nLCAnY2VudGVyJyk7XG5cbiAgLy8gR3JvdW5kXG4gIC8vIEF0dHJpYnV0ZXNcbiAgZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAuMDUnKTtcbiAgZ3JvdW5kLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMycpO1xuICBncm91bmQuc2V0QXR0cmlidXRlKCdkZXB0aCcsICcxJyk7XG4gIGdyb3VuZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RsLWdyb3VuZCcpO1xuICBncm91bmQuc2V0QXR0cmlidXRlKCdjb2xvcicsICcjZmZmZmZmJyk7XG5cbiAgLy8gQ3lsaW5kZXJcbiAgY3lsaW5kZXIuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsICcwIDAgOTAnKTtcbiAgY3lsaW5kZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBjeWxIZWlnaHQpO1xuICBjeWxpbmRlci5zZXRBdHRyaWJ1dGUoJ3JhZGl1cycsICcwLjA1Jyk7XG4gIGN5bGluZGVyLnNldEF0dHJpYnV0ZSgnY29sb3InLCAnIzc3Nzc3NycpO1xuXG4gIC8vIExhbXBcbiAgbGFtcC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJzAuMDAwNSAwLjAwMDUgMC4wMDA1Jyk7XG4gIGxhbXAuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdjb2xvcjogYmx1ZScpO1xuICBsYW1wLnNldEF0dHJpYnV0ZSgnb2JqLW1vZGVsJywgJ29iajogJyArIHRpbWVsaW5lRGF0YVtpXS5vYmpTcmMpO1xuICBsYW1wLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnLTEgMCAwJyk7XG5cbiAgLy8gQXBwZW5kaW5nIHRvIGNvbnRhaW5lclxuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VuZCk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3lsaW5kZXIpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhbXApO1xuICBkeW5hbWljUHJpbWl0aXZlcy50aW1lbGluZS5hcHBlbmRDaGlsZChkYXRhQ29udGFpbmVyKTtcbn1cbiJdfQ==