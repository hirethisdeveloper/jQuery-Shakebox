/*
 * jQuery Shakebox v1.0 - http://www.hirethisdeveloper.com/
 *
 * Given an object, shakes the box back and forth
 * Optional parameter { maxreps: #, speed: # }
 * Example:   $("#object").shakebox(); // default 2
 * Example:   $("#object").shakebox({ maxreps: 10, speed: 100 }); // speed in milliseconds
 *
 * TERMS OF USE - jQuery Shakebox
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2011 Phil Pastorek, HireThisDeveloper
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
(function($){$.fn.shakebox=function(options){var sbo={reps:0,maxreps:2,speed:100};return this.each(function(){var $this=$(this);if(options){$.extend(sbo,options);}shakebox($this);function shakebox(obj){obj.animate({'margin-left':'10px'},{duration:sbo.speed,complete:function(){obj.animate({'margin-left':'-10px'},{duration:sbo.speed,complete:function(){if(sbo.reps<sbo.maxreps-1){sbo.reps++;shakebox(obj);}else{obj.animate({'margin-left':'0px'},sbo.speed);sbo.reps=0;}}});}});};});};})(jQuery);
