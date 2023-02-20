const video = {
    title: 'Thirumalai',
    tags: ['a','b','c'],
    showTag(){
        this.tags.forEach(function(each){
            console.log(each);
        });
    }
}

video.showTag();