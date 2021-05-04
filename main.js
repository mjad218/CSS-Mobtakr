

             
               /*<![CDATA[*/

     
             
      
             
              /*<![CDATA[*/

      var templateUsers;
            
                          var isValid = 0;



// begin optimizing 
               if ( pageType == "item" ||  window.location.href == homePage || window.location.href == homePage + "?m=1" ) {


(function relatedPF(){
    return new Promise((resolve,reject)=>{


                    
                    
var myPosts = new Array(); 

       var fetchLabelURL = homePage  +"/feeds/posts/default/-/" + myLabelName_1 + "?alt=json-in-script&max-results=100"; 
console.log(fetchLabelURL);
        $.ajax({
			url: fetchLabelURL,
			cashe: true,
			    type: 'get',
    dataType: "jsonp",
			success: function(data, status) {
				
				 console.log("Success Handling The Fetch Related ", )  ;



  if (screen.width < 485) {

               var post_thumbnail_width = screen.width - 40;
               var post_thumbnail_height = 160 ;
 
} 
else if (screen.width < 978 && screen.width >485  ) {
               var post_thumbnail_width = screen.width/2 -40;
               var post_thumbnail_height = 120;
               
               }
 else {
               
               var post_thumbnail_width = 1100/4 - 40;
               var post_thumbnail_height = 120;
               
               }
               

               var max_related_entries;
               function escapeRegExp(string) {
                   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
               }
               
               function replaceAll(str, term, replacement) {
                   return str.replace(new RegExp(escapeRegExp(term), "g"), replacement)
               }


var containerDiv , relatedpoststitle; 

              if (pageType == "item") { 
containerDiv = "related-posts"; 
 relatedpoststitle = (window.location.href, "تدوينات ذات صلة"); 
              max_related_entries = 3;
console.log(containerDiv);  

} else {

containerDiv = "featured-posts" ;
             max_related_entries = 4;

console.log(containerDiv);  

}


                   console.log(data); 
                   for ( post_titles = new Array, post_comments = new Array, author_image= new Array, post_summary = new Array, post_time = new Array, post_authors= new Array, post_tags = new Array, post_num = 0, post_urls = new Array, post_thumbnail_url = new Array, i = 0; i < data.feed.entry.length; i++) {
                       var feed_entry = data.feed.entry[i];
                       post_titles[post_num] = feed_entry.title.$t;
                               post_tags[post_num] = feed_entry.category[0].term;
                               post_authors[post_num] = feed_entry.author[0].name.$t;
                                               post_time[post_num] = feed_entry.published.$t;
                                            //   post_summary[post_num] = feed_entry.summary.$t;
                                               post_comments[post_num] = feed_entry.thr$total.$t;
                                author_image[post_num] = feed_entry.author[0].gd$image.src	;
                    console.log(post_tags[post_num]) ;
                          
                       try {
                           post_thumbnail_url[post_num] = feed_entry.media$thumbnail.url
                       } catch (error) {
                           s = feed_entry.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d ? post_thumbnail_url[post_num] = d : "undefined" != typeof defaultnoimage ? post_thumbnail_url[post_num] = defaultnoimage : post_thumbnail_url[post_num] = "https://i.ibb.co/yS6JvBh/no-image.jpg"
                       }
               
                       for (var k = 0; k < feed_entry.link.length; k++) "alternate" == feed_entry.link[k].rel && (post_urls[post_num] = feed_entry.link[k].href, post_num++)
                   }
                   
                   var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
                       iteration = 0;
                   if (post_titles.length > 0 && pageType == "item") {
                       var rp_heading = document.createElement("h5"),
                           textnode = document.createTextNode(relatedpoststitle);
                       rp_heading.classList.add("tittle");
                       rp_heading.appendChild(textnode), document.getElementById(containerDiv).appendChild(rp_heading);
                      
                   }
               
                   for (; iteration < post_titles.length && 20 > iteration && max_related_entries > iteration;)
               
                       if (post_urls[random_entry] != currentURL) {
               
                var rp_container = document.createElement("div");
               
                       rp_container.setAttribute("style", "clear: both;"), rp_container.setAttribute("id", "rp_container-" + iteration ),rp_container.setAttribute("class", "rp-div"),document.getElementById(containerDiv).appendChild(rp_container); 

               
                           var rp_anchor = document.createElement("a");
                          rp_anchor.setAttribute("id", "rp-anchor-" + iteration), rp_anchor.setAttribute("href", post_urls[random_entry]), rp_anchor.setAttribute("class", "featured-item-data"), document.getElementById("rp_container-" + iteration).appendChild(rp_anchor);
               
                                          var rp_anchor_img = document.createElement("a");
              rp_anchor_img.setAttribute("id", "rp-anchor-img" + iteration), rp_anchor_img.setAttribute("href", post_urls[random_entry]), document.getElementById("rp_container-" + iteration).appendChild(rp_anchor_img);


              var pin = String(post_thumbnail_url[random_entry].match(/\/s72-c\//));
                        post_thumbnail_url[random_entry] = replaceAll(post_thumbnail_url[random_entry], pin, "/w" + post_thumbnail_width + "-h" + post_thumbnail_height + "-p/" + "-rw");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/png/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpeg/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpg/gim,"webp");
console.log(post_thumbnail_url[random_entry]);

                                          var rp_anchor_img_tag = document.createElement("img");
 rp_anchor_img_tag.setAttribute("src", post_thumbnail_url[random_entry]),rp_anchor_img_tag.setAttribute("alt", post_titles[random_entry]),rp_anchor_img_tag.setAttribute("class", "featured-item-image"), rp_anchor_img_tag.setAttribute("width", post_thumbnail_width), rp_anchor_img_tag.setAttribute("height", post_thumbnail_height), document.getElementById("rp-anchor-img" + iteration).appendChild(rp_anchor_img_tag);
// rp_anchor_img_tag.style.minHeight = post_thumbnail_height + "px";

console.log(post_thumbnail_url[random_entry]) ; 
console.log(pin) ; 





               var rp_tag = document.createElement("span");
                          rp_tag.setAttribute("id", "rp-tag-" + iteration), rp_tag.setAttribute("class", "rp-tag"), document.getElementById("rp_container-" + iteration).appendChild(rp_tag);
                var text_tag = document.createTextNode(post_tags[random_entry]);
               document.getElementById("rp-tag-" + iteration).appendChild(text_tag);
               
               
                   var rp_para = document.createElement("p");
                           rp_para.setAttribute("id", "rp-para-" + iteration);
                           var textnode = document.createTextNode(post_titles[random_entry]);
                           rp_para.appendChild(textnode), document.getElementById("rp-anchor-" + iteration).appendChild(rp_para) ;
               
               
               var rp_meta = document.createElement("p");
                rp_meta.setAttribute("class", "rp-meta"),  rp_meta.setAttribute("id", "rp-meta-" + iteration), document.getElementById("rp-anchor-" + iteration).appendChild(rp_meta);
               
               var rp_authorImage = document.createElement("img");
               
                  rp_authorImage.setAttribute("src", author_image[random_entry] ) , rp_authorImage.setAttribute("id", "rp-authorimage-" + iteration) , document.getElementById("rp-meta-" + iteration).appendChild(rp_authorImage),rp_authorImage.setAttribute("width","50px" ),rp_authorImage.setAttribute("height","50px" ) ; 
               
               var rp_author = document.createElement("span");
                          rp_author.setAttribute("id", "rp-author-" + iteration), rp_author.setAttribute("class", "rp-author"), document.getElementById("rp-meta-" + iteration).appendChild(rp_author);
                var text_author = document.createTextNode(post_authors[random_entry]);
               document.getElementById("rp-author-" + iteration).appendChild(text_author);
         
               var rp_comments = document.createElement("span");
                          rp_comments.setAttribute("id", "rp-comments-" + iteration), rp_comments.setAttribute("class", "rp-comments"), document.getElementById("rp-meta-" + iteration).appendChild(rp_comments);
                

 document.getElementById( "rp-comments-" + iteration).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.626 511.626" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><script/>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M301.927,327.605c30.926-13.038,55.34-30.785,73.23-53.248c17.888-22.458,26.833-46.915,26.833-73.372    c0-26.458-8.945-50.917-26.84-73.376c-17.888-22.459-42.298-40.208-73.228-53.249c-30.93-13.039-64.571-19.556-100.928-19.556    c-36.354,0-69.995,6.521-100.927,19.556c-30.929,13.04-55.34,30.789-73.229,53.249C8.947,150.072,0,174.527,0,200.986    c0,22.648,6.767,43.975,20.28,63.96c13.512,19.981,32.071,36.829,55.671,50.531c-1.902,4.572-3.853,8.754-5.852,12.566    c-2,3.806-4.377,7.467-7.139,10.991c-2.76,3.525-4.899,6.283-6.423,8.275c-1.523,1.998-3.997,4.812-7.425,8.422    c-3.427,3.617-5.617,5.996-6.567,7.135c0-0.191-0.381,0.24-1.143,1.287c-0.763,1.047-1.191,1.52-1.285,1.431    c-0.096-0.103-0.477,0.373-1.143,1.42c-0.666,1.048-1,1.571-1,1.571l-0.715,1.423c-0.282,0.575-0.476,1.137-0.57,1.712    c-0.096,0.567-0.144,1.19-0.144,1.854s0.094,1.28,0.288,1.854c0.381,2.471,1.475,4.466,3.283,5.996    c1.807,1.52,3.756,2.279,5.852,2.279h0.857c9.515-1.332,17.701-2.854,24.552-4.569c29.312-7.61,55.771-19.797,79.372-36.545    c17.129,3.046,33.879,4.568,50.247,4.568C237.353,347.16,270.998,340.645,301.927,327.605z" fill="#6a6a6a" data-original="#000000" style=""/>
		<path d="M491.354,338.166c13.518-19.889,20.272-41.247,20.272-64.09c0-23.414-7.146-45.316-21.416-65.68    c-14.277-20.362-33.694-37.305-58.245-50.819c4.374,14.274,6.563,28.739,6.563,43.398c0,25.503-6.368,49.676-19.129,72.519    c-12.752,22.836-31.025,43.01-54.816,60.524c-22.08,15.988-47.205,28.261-75.377,36.829    c-28.164,8.562-57.573,12.848-88.218,12.848c-5.708,0-14.084-0.377-25.122-1.137c38.256,25.119,83.177,37.685,134.756,37.685    c16.371,0,33.119-1.526,50.251-4.571c23.6,16.755,50.06,28.931,79.37,36.549c6.852,1.718,15.037,3.237,24.554,4.568    c2.283,0.191,4.381-0.476,6.283-1.999c1.903-1.522,3.142-3.61,3.71-6.272c-0.089-1.143,0-1.77,0.287-1.861    c0.281-0.09,0.233-0.712-0.144-1.852c-0.376-1.144-0.568-1.715-0.568-1.715l-0.712-1.424c-0.198-0.376-0.52-0.903-0.999-1.567    c-0.476-0.66-0.855-1.143-1.143-1.427c-0.28-0.284-0.705-0.763-1.28-1.424c-0.568-0.66-0.951-1.092-1.143-1.283    c-0.951-1.143-3.139-3.521-6.564-7.139c-3.429-3.613-5.899-6.42-7.422-8.418c-1.523-1.999-3.665-4.757-6.424-8.282    c-2.758-3.518-5.14-7.183-7.139-10.991c-1.998-3.806-3.949-7.995-5.852-12.56C459.289,374.859,477.843,358.062,491.354,338.166z" fill="#6a6a6a" data-original="#000000" style=""/>
	</g>
</g>
</svg>
`;

var text_comments = document.createTextNode(post_comments[random_entry]);
               document.getElementById("rp-comments-" + iteration).appendChild(text_comments);
               
               
                        iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0
                      
               
               } else iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;
                   post_urls.splice(0, post_urls.length), post_thumbnail_url.splice(0, post_thumbnail_url.length), post_titles.splice(0, post_titles.length)
              







									},
			error: function(xhr, textStatus, err) {
// error 
 console.log("Error Handling The Fetch Related " , err , textStatus)  ;
   
}


            });
	

			
    });
}) ();
}

/*

             // Begin Related posts Function 
//pageType == "item" ||  

               if (pageType == "item" ||  window.location.href == homePage || window.location.href == homePage + "?m=1") {
console.log(pageType); 
               if (screen.width < 485) {

               var post_thumbnail_width = screen.width - 40;
               var post_thumbnail_height = 160 ;
 
} else if (screen.width < 978 && screen.width >485  ) {
               var post_thumbnail_width = screen.width/2 -40;
               var post_thumbnail_height = 120;
               
               } else {
               
               var post_thumbnail_width = 1100/4 - 40;
               var post_thumbnail_height = 120;
               
               }
               
               var max_related_entries;
               function escapeRegExp(string) {
                   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
               }
               
               function replaceAll(str, term, replacement) {
                   return str.replace(new RegExp(escapeRegExp(term), "g"), replacement)
               }
var containerDiv , relatedpoststitle; 

              if (pageType == "item") { 
containerDiv = "related-posts"; 
 relatedpoststitle = (window.location.href, "تدوينات ذات صلة"); 
              max_related_entries = 3;

} else {

containerDiv = "featured-posts"
             max_related_entries = 4;

}

 function display_related_posts(json) {
                   console.log(json); 
                   for ( post_titles = new Array, post_comments = new Array, author_image= new Array, post_summary = new Array, post_time = new Array, post_authors= new Array, post_tags = new Array, post_num = 0, post_urls = new Array, post_thumbnail_url = new Array, i = 0; i < json.feed.entry.length; i++) {
                       var feed_entry = json.feed.entry[i];
                       post_titles[post_num] = feed_entry.title.$t;
                               post_tags[post_num] = feed_entry.category[0].term;
                               post_authors[post_num] = feed_entry.author[0].name.$t;
                                               post_time[post_num] = feed_entry.published.$t;
                                            //   post_summary[post_num] = feed_entry.summary.$t;
                                               post_comments[post_num] = feed_entry.thr$total.$t;
                                author_image[post_num] = feed_entry.author[0].gd$image.src	;
                    console.log(post_tags[post_num]) ;
                          
                       try {
                           post_thumbnail_url[post_num] = feed_entry.media$thumbnail.url
                       } catch (error) {
                           s = feed_entry.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d ? post_thumbnail_url[post_num] = d : "undefined" != typeof defaultnoimage ? post_thumbnail_url[post_num] = defaultnoimage : post_thumbnail_url[post_num] = "https://i.ibb.co/yS6JvBh/no-image.jpg"
                       }
               
                       for (var k = 0; k < feed_entry.link.length; k++) "alternate" == feed_entry.link[k].rel && (post_urls[post_num] = feed_entry.link[k].href, post_num++)
                   }
                   
                   var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
                       iteration = 0;
                   if (post_titles.length > 0 && pageType == "item") {
                       var rp_heading = document.createElement("h5"),
                           textnode = document.createTextNode(relatedpoststitle);
                       rp_heading.classList.add("tittle");
                       rp_heading.appendChild(textnode), document.getElementById(containerDiv).appendChild(rp_heading);
                      
                   }
               
                   for (; iteration < post_titles.length && 20 > iteration && max_related_entries > iteration;)
               
                       if (post_urls[random_entry] != currentURL) {
               
                var rp_container = document.createElement("div");
               
                       rp_container.setAttribute("style", "clear: both;"), rp_container.setAttribute("id", "rp_container-" + iteration ),rp_container.setAttribute("class", "rp-div"),document.getElementById(containerDiv).appendChild(rp_container); 

               
                           var rp_anchor = document.createElement("a");
                          rp_anchor.setAttribute("id", "rp-anchor-" + iteration), rp_anchor.setAttribute("href", post_urls[random_entry]), rp_anchor.setAttribute("class", "featured-item-data"), document.getElementById("rp_container-" + iteration).appendChild(rp_anchor);
               
                                          var rp_anchor_img = document.createElement("a");
              rp_anchor_img.setAttribute("id", "rp-anchor-img" + iteration), rp_anchor_img.setAttribute("href", post_urls[random_entry]), document.getElementById("rp_container-" + iteration).appendChild(rp_anchor_img);


              var pin = String(post_thumbnail_url[random_entry].match(/\/s72-c\//));
                        post_thumbnail_url[random_entry] = replaceAll(post_thumbnail_url[random_entry], pin, "/w" + post_thumbnail_width + "-h" + post_thumbnail_height + "-p/" + "-rw");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/png/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpeg/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpg/gim,"webp");
console.log(post_thumbnail_url[random_entry]);

                                          var rp_anchor_img_tag = document.createElement("img");
 rp_anchor_img_tag.setAttribute("src", post_thumbnail_url[random_entry]),rp_anchor_img_tag.setAttribute("alt", post_titles[random_entry]),rp_anchor_img_tag.setAttribute("class", "featured-item-image"), rp_anchor_img_tag.setAttribute("width", post_thumbnail_width), rp_anchor_img_tag.setAttribute("height", post_thumbnail_height), document.getElementById("rp-anchor-img" + iteration).appendChild(rp_anchor_img_tag);
// rp_anchor_img_tag.style.minHeight = post_thumbnail_height + "px";

console.log(post_thumbnail_url[random_entry]) ; 
console.log(pin) ; 





               var rp_tag = document.createElement("span");
                          rp_tag.setAttribute("id", "rp-tag-" + iteration), rp_tag.setAttribute("class", "rp-tag"), document.getElementById("rp_container-" + iteration).appendChild(rp_tag);
                var text_tag = document.createTextNode(post_tags[random_entry]);
               document.getElementById("rp-tag-" + iteration).appendChild(text_tag);
               
               
                   var rp_para = document.createElement("p");
                           rp_para.setAttribute("id", "rp-para-" + iteration);
                           var textnode = document.createTextNode(post_titles[random_entry]);
                           rp_para.appendChild(textnode), document.getElementById("rp-anchor-" + iteration).appendChild(rp_para) ;
               
               
               var rp_meta = document.createElement("p");
                rp_meta.setAttribute("class", "rp-meta"),  rp_meta.setAttribute("id", "rp-meta-" + iteration), document.getElementById("rp-anchor-" + iteration).appendChild(rp_meta);
               
               var rp_authorImage = document.createElement("img");
               
                  rp_authorImage.setAttribute("src", author_image[random_entry] ) , rp_authorImage.setAttribute("id", "rp-authorimage-" + iteration) , document.getElementById("rp-meta-" + iteration).appendChild(rp_authorImage),rp_authorImage.setAttribute("width","50px" ),rp_authorImage.setAttribute("height","50px" ) ; 
               
               var rp_author = document.createElement("span");
                          rp_author.setAttribute("id", "rp-author-" + iteration), rp_author.setAttribute("class", "rp-author"), document.getElementById("rp-meta-" + iteration).appendChild(rp_author);
                var text_author = document.createTextNode(post_authors[random_entry]);
               document.getElementById("rp-author-" + iteration).appendChild(text_author);
         
               var rp_comments = document.createElement("span");
                          rp_comments.setAttribute("id", "rp-comments-" + iteration), rp_comments.setAttribute("class", "rp-comments"), document.getElementById("rp-meta-" + iteration).appendChild(rp_comments);
                

 document.getElementById( "rp-comments-" + iteration).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.626 511.626" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><script/>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M301.927,327.605c30.926-13.038,55.34-30.785,73.23-53.248c17.888-22.458,26.833-46.915,26.833-73.372    c0-26.458-8.945-50.917-26.84-73.376c-17.888-22.459-42.298-40.208-73.228-53.249c-30.93-13.039-64.571-19.556-100.928-19.556    c-36.354,0-69.995,6.521-100.927,19.556c-30.929,13.04-55.34,30.789-73.229,53.249C8.947,150.072,0,174.527,0,200.986    c0,22.648,6.767,43.975,20.28,63.96c13.512,19.981,32.071,36.829,55.671,50.531c-1.902,4.572-3.853,8.754-5.852,12.566    c-2,3.806-4.377,7.467-7.139,10.991c-2.76,3.525-4.899,6.283-6.423,8.275c-1.523,1.998-3.997,4.812-7.425,8.422    c-3.427,3.617-5.617,5.996-6.567,7.135c0-0.191-0.381,0.24-1.143,1.287c-0.763,1.047-1.191,1.52-1.285,1.431    c-0.096-0.103-0.477,0.373-1.143,1.42c-0.666,1.048-1,1.571-1,1.571l-0.715,1.423c-0.282,0.575-0.476,1.137-0.57,1.712    c-0.096,0.567-0.144,1.19-0.144,1.854s0.094,1.28,0.288,1.854c0.381,2.471,1.475,4.466,3.283,5.996    c1.807,1.52,3.756,2.279,5.852,2.279h0.857c9.515-1.332,17.701-2.854,24.552-4.569c29.312-7.61,55.771-19.797,79.372-36.545    c17.129,3.046,33.879,4.568,50.247,4.568C237.353,347.16,270.998,340.645,301.927,327.605z" fill="#6a6a6a" data-original="#000000" style=""/>
		<path d="M491.354,338.166c13.518-19.889,20.272-41.247,20.272-64.09c0-23.414-7.146-45.316-21.416-65.68    c-14.277-20.362-33.694-37.305-58.245-50.819c4.374,14.274,6.563,28.739,6.563,43.398c0,25.503-6.368,49.676-19.129,72.519    c-12.752,22.836-31.025,43.01-54.816,60.524c-22.08,15.988-47.205,28.261-75.377,36.829    c-28.164,8.562-57.573,12.848-88.218,12.848c-5.708,0-14.084-0.377-25.122-1.137c38.256,25.119,83.177,37.685,134.756,37.685    c16.371,0,33.119-1.526,50.251-4.571c23.6,16.755,50.06,28.931,79.37,36.549c6.852,1.718,15.037,3.237,24.554,4.568    c2.283,0.191,4.381-0.476,6.283-1.999c1.903-1.522,3.142-3.61,3.71-6.272c-0.089-1.143,0-1.77,0.287-1.861    c0.281-0.09,0.233-0.712-0.144-1.852c-0.376-1.144-0.568-1.715-0.568-1.715l-0.712-1.424c-0.198-0.376-0.52-0.903-0.999-1.567    c-0.476-0.66-0.855-1.143-1.143-1.427c-0.28-0.284-0.705-0.763-1.28-1.424c-0.568-0.66-0.951-1.092-1.143-1.283    c-0.951-1.143-3.139-3.521-6.564-7.139c-3.429-3.613-5.899-6.42-7.422-8.418c-1.523-1.999-3.665-4.757-6.424-8.282    c-2.758-3.518-5.14-7.183-7.139-10.991c-1.998-3.806-3.949-7.995-5.852-12.56C459.289,374.859,477.843,358.062,491.354,338.166z" fill="#6a6a6a" data-original="#000000" style=""/>
	</g>
</g>
</svg>
`;

var text_comments = document.createTextNode(post_comments[random_entry]);
               document.getElementById("rp-comments-" + iteration).appendChild(text_comments);
               
               
                        iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0
                      
               
               } else iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;
                   post_urls.splice(0, post_urls.length), post_thumbnail_url.splice(0, post_thumbnail_url.length), post_titles.splice(0, post_titles.length)
               }
               
               }

*/

 // End related posts 


// begin menu &amp; search functions 

   // <![CDATA[

if (pageType != "static_page") {
 var elmnt = document.getElementById("myMain");
       var sideAbove = document.getElementById("sidebar");

         var myHeight =elmnt.offsetHeight - sideAbove.offsetHeight - 500 ;
         
         var cssProperty = myHeight + "px" ;
         console.log(cssProperty) ; 
          console.log(elmnt.offsetHeight) ;
         document.getElementById("mySidebar").style.minHeight = cssProperty; 
}
if (pageType == "item") {
      //  document.getElementById("ad-above").appendChild(document.getElementById("HTML10"));
                   // document.getElementById("ad-below").appendChild(document.getElementById("HTML101"));
         }
          function openNav() {
            document.getElementById("mainmenu").style.width = "75%";           document.getElementById("mainmenu").style.transform = "translateX(0px)";
            document.getElementById("close-nav").style.display = "block";
            document.getElementById("close-nav").style.transform = " scale(2)";
          

            document.getElementById("open-nav").style.display = "none";
          }
          
          function closeNav() {
            document.getElementById("mainmenu").style.width = "0";
            document.getElementById("mainmenu").style.transform = "translateX(75px)";
            document.getElementById("open-nav").style.display = "block";
            document.getElementById("close-nav").style.display = "none";
          }
          function searchNav() {
            document.getElementById("search-area").style.height = "auto";
            document.getElementById("search-area").style.display = "block";
            document.getElementById("search-close").style.display = "block";
            document.getElementById("search-nav").style.display = "none";
          
          }
          
          function closeSearch() {
            document.getElementById("search-area").style.height = "0";
            document.getElementById("search-area").style.display = "none";
            document.getElementById("search-close").style.display = "none";
            document.getElementById("search-nav").style.display = "block";
          
          }
          function shareNav() {
            document.getElementById("share-area").style.height = "auto";
            document.getElementById("share-toggle").style.display = "none";
            document.getElementById("share-toggleClose").style.display = "block";
            document.getElementById("share-area").style.padding = "5px";
          
          }
          function shareClose() {
            document.getElementById("share-area").style.height = "0";
            document.getElementById("share-toggleClose").style.display = "none";
            document.getElementById("share-toggle").style.display = "block";
              document.getElementById("share-area").style.padding = "0";
          }
// end search and menu scripts 

         // Fast Load

        (function(a) {
          a.fn.lazyload = function(b) {
              var c = {
                  threshold: 0,
                  failurelimit: 0,
                  event: "scroll",
                  effect: "show",
                  container: window
              };
              if(b) {
                  a.extend(c, b)
              }
              var d = this;
              if("scroll" == c.event) {
                  a(c.container).bind("scroll", function(b) {
                      var e = 0;
                      d.each(function() {
                          if(a.abovethetop(this, c) || a.leftofbegin(this, c)) {} else if(!a.belowthefold(this, c) && !a.rightoffold(this, c)) {
                              a(this).trigger("appear")
                          } else {
                              if(e++ > c.failurelimit) {
                                  return false
                              }
                          }
                      });
                      var f = a.grep(d, function(a) {
                          return !a.loaded
                      });
                      d = a(f)
                  })
              }
              this.each(function() {
                  var b = this;
                  if(undefined == a(b).attr("original")) {
                      a(b).attr("original", a(b).attr("src"))
                  }
                  if("scroll" != c.event || undefined == a(b).attr("src") || c.placeholder == a(b).attr("src") || a.abovethetop(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.rightoffold(b, c)) {
                      if(c.placeholder) {
                          a(b).attr("src", c.placeholder)
                      } else {
                          a(b).removeAttr("src")
                      }
                      b.loaded = false
                  } else {
                      b.loaded = true
                  }
                  a(b).one("appear", function() {
                      if(!this.loaded) {
                          a("<img />").bind("load", function() {
                              a(b).hide().attr("src", a(b).attr("original"))[c.effect](c.effectspeed);
                              b.loaded = true
                          }).attr("src", a(b).attr("original"))
                      }
                  });
                  if("scroll" != c.event) {
                      a(b).bind(c.event, function(c) {
                          if(!b.loaded) {
                              a(b).trigger("appear")
                          }
                      })
                  }
              });
              a(c.container).trigger(c.event);
              return this
          };
          a.belowthefold = function(b, c) {
              if(c.container === undefined || c.container === window) {
                  var d = a(window).height() + a(window).scrollTop()
              } else {
                  var d = a(c.container).offset().top + a(c.container).height()
              }
              return d <= a(b).offset().top - c.threshold
          };
          a.rightoffold = function(b, c) {
              if(c.container === undefined || c.container === window) {
                  var d = a(window).width() + a(window).scrollLeft()
              } else {
                  var d = a(c.container).offset().left + a(c.container).width()
              }
              return d <= a(b).offset().left - c.threshold
          };
          a.abovethetop = function(b, c) {
              if(c.container === undefined || c.container === window) {
                  var d = a(window).scrollTop()
              } else {
                  var d = a(c.container).offset().top
              }
              return d >= a(b).offset().top + c.threshold + a(b).height()
          };
          a.leftofbegin = function(b, c) {
              if(c.container === undefined || c.container === window) {
                  var d = a(window).scrollLeft()
              } else {
                  var d = a(c.container).offset().left
              }
              return d >= a(b).offset().left + c.threshold + a(b).width()
          };
          a.extend(a.expr[":"], {
              "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
              "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
              "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
              "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
          })
      })(jQuery);
      $(function() {
          $("img").lazyload({
              effect: "fadeIn",
              threshold: -20
          })
      });

//End fast load 


 // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 30;
var navbarHeight = $('#header-ups').outerHeight();

if($('alertBar').length) {
  var alertHeight = $('alertBar').outerHeight();
} else {
  var alertHeight = 0;
}

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 50);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
  return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down, hide nav
    $('#header-ups').addClass('gescout-sticky').removeClass('gescout-show');
  } else {
    // Scroll Up, show nav
    if(st + $(window).height() < $(document).height()) {
      $('#header-ups').addClass('gescout-show');
    }
    // if scrolled up to the top again
    if(st <= navbarHeight) {
      $('#header-ups').removeClass('gescout-sticky').addClass('gescout-show');

    }


  }

  lastScrollTop = st;
}

      
function closePromotion(){
document.getElementById("template-promotion").style.transform="translateY(136px)";    

}

const toggleSwitch = document.querySelector('#header-ups input[type="checkbox"]');

if (localStorage.theme) {
  toggleSwitch.checked = localStorage.theme === "dark";
}

function switchTheme(e) {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.theme = theme;
}

toggleSwitch.addEventListener("change", switchTheme);


        
       // image optimization 
/* 
var myIMG = document.getElementsByTagName("img");

for (var x =0 ; x < myIMG.length; x++) {
 var imgSRC = myIMG[x].src; 
var imgSRC_width = myIMG[x].width; 
var imgSRC_height = myIMG[x].height; 

   var  mypin = String(imgSRC.match(/\/s72-c\//));
                        imgSRC = replaceAll(imgSRC, mypin, "/w" + imgSRC_width + "-h" + imgSRC_height + "-p/" + "-rw");
imgSRC = imgSRC.replace(/png/gim,"webp");
imgSRC = imgSRC.replace(/jpeg/gim,"webp");
imgSRC = imgSRC.replace(/jpg/gim,"webp");

myIMG[x].src= imgSRC;

console.log(imgSRC);}
*/ 

console.log(document.lastModified);

               /*]]>*/
