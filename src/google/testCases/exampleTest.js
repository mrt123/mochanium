var googleResultsView = require('../../google/view/resultsView');
var googleOp = require('../../google/operator/googleOperator');


describe('math suite', function(){
    it('math Test', function(done){

        setTimeout(function(){
            assert(1 !== 2, '1 is not 2');
        }, 50);

        setTimeout(function(){
            assert('hey')
        }, 50);

        setTimeout(function(){
            done();
        }, 1000);
    });
});


describe('example describe', function(){

    beforeEach(function() {
        // ARRANGE
        driver.get('http://www.google.ie');

        // ACT
        googleOp.search('MDN');
    });

    it('check first result site link', function(done){
        // ASSERT
        var resultsEl = googleResultsView.getFirstSiteLinkEl();

        resultsEl.getText().then(function(text) {
            assert.equal(text, 'Mozilla Developer Network');
            done();
        });

    });

    it('check first result organic link', function(done){
        // ASSERT
        var resultsEl = googleResultsView.getFirstOrganicLinkEl();

        resultsEl.getText().then(function(text) {
            assert.equal(text, 'Mozilla Developer Network · GitHub');
            done();
        });

    })
});