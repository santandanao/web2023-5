document.addEventListener('DOMContentLoaded', function() {
    htmlTableOfContents();
} );                        

function htmlTableOfContents( documentRef ) {
    var documentRef = documentRef || document;
    var toc = documentRef.getElementById("tocBlock");
    var headings = [].slice.call(documentRef.body.querySelectorAll('.entry-content h2, .entry-content h3')); /* ここで目次で取得するタグを指定 */
    headings.forEach(function (heading, index) {
        var ref = "toc" + index;
        if ( heading.hasAttribute( "id" ) ) 
            ref = heading.getAttribute( "id" );
        else
            heading.setAttribute( "id", ref );

        var link = documentRef.createElement( "a" );
        link.setAttribute( "href", "#"+ ref );
        link.textContent = heading.textContent;

        var div = documentRef.createElement( "li" );
        div.setAttribute( "class", heading.tagName.toLowerCase() );
        div.appendChild( link );
        toc.appendChild( div );
    });
}

try {
    module.exports = htmlTableOfContents;
} catch (e) {
}

//accordion
var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}
