import Ember from 'ember';

export default Ember.Component.extend({
    analyticsValueService: Ember.inject.service(),
    init: function(){

        this._super(...arguments);

        this.set("availableMetrics", this.get("analyticsValueService").get("metrics"));
    }
});