var poller = new window.massrel.Poller(
    {frequency: 15, limit: 5},
    function(data){
        $("ul").remove();
        for(i in data)
            $(".wrap").append("<ul class='fadeInUp animated'>"+data[i].name+" "+data[i].count+"</ul>");
    }
);

poller.start();