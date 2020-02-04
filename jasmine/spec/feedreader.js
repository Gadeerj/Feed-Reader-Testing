/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URLs are defined ', function(){  // test each feed to make sure it has URL defined & URL is not empty
            for(let g = 0; g < allFeeds.length; g++ ){
                expect(allFeeds[g].url).toBeDefined();
                expect(allFeeds[g].url.length).not.toBe(0);
            };
        });

        it('names are defined ', function(){ // test each feed and make sure it has a name defined & the name is not empty
            for(let g = 0; g < allFeeds.length; g++ ){
                expect(allFeeds[g].name).toBeDefined();
                expect(allFeeds[g].url.length).not.toBe(0);
            };
        });
          /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        describe('The Menu' , function (){ // new test suite
            it('menu element is hidden', function(){ // make sure that the menu is hiddent by default
                expect($('body').hasClass('menu-hidden')).toEqual(true);
            });


         
            if('working toggle on click event', function(){ // Test to make sure that the meuu changes
              $('.menu-icon-link').trigger('click'); // visibility when the menu icon is clicked
              expect('body').hasClass('menu-hidden').toBe(false);
              $('.menu-icon-link').trigger('click');
              expect('body').hasClass('menu-hidden').toBe(true);
            });
        });
      
   
        describe('Initial Entries' , function(){ // new suite to make sure loadfeed finction is called and completes its work
            beforeEach(function(done){
                loadFeed(0, function(){
                    done();

                });

            });
            if('if entry has more than 0 then define' , function(){
                
                    expect($('.feed .entry').length).toBeGreaterThan(0);

                
           
            });
        });
      
       let FFeed , SFeed;   
        describe('New Feed Selection' , function(){ // new suite to make sure when a new feed is loaded using loadfeed function
                                    // that the content actually changes
            beforeEach(function(done){ 
              //load first feed(index 0) and store it in FFeed
                loadFeed(0, function(){
                    //FFeed = $('.feed').find(allFeeds.url);
                    FFeed = $('.feed').html();
                    done();
                });
                loadFeed(1, function(){
                   // SFeed = $('.feed').find(allFeeds.url);
                    SFeed = $('.feed').html();
                    done();
                });
        });
    });
        it('new feed is different to old one' , function(done){

            expect(FFeed).toBe(SFeed);
            done();

            
        });

        
    });



}());
