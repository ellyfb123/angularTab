(function(){
    var app = angular.module('angularTab',[]);

    app.controller('tabController',function(){
        this.comments = tabs;
        this.tab = 1;
        this.setTab = function(tabValue){
            this.tab = tabValue;
        };
        this.isTab = function(tabValue){
            return(this.tab == tabValue);
        };

    });

    var tabs = [
        {
            html:"HTML is written in the form of HTML elements consisting of tags enclosed \
			in angle brackets (like <html>). HTML tags most commonly come in pairs like \
			<h1> and </h1>, although some tags represent empty elements and so are \
			unpaired,(they are also called opening tags and closing tags).",
            jquery: "jQuery is a fast, small, and feature-rich JavaScript library. It makes \
			things like HTML document traversal and manipulation, event handling, \
			animation, and Ajax much simpler with an easy-to-use API that works \
			across a multitude of browsers. With a combination of versatility and \
			extensibility.",
            css: "CSS is designed primarily to enable the separation of document content\
			 from document presentation, including elements such as the layout, colors,\
			  and fonts.[1] This separation can improve content accessibility, provide \
			 (such as by allowing for tableless web design)."
        }];
})();
