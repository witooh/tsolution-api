App
    .directive('modal', function () {
        return {
            scope: {
                id: '@modalId',
                title: '@modalTitle',
                body: '@modalBody',
                ok: '@modalOk',
                close: '@modalClose',
                click: '&modalClick'
            },
            replace: true,
            template: '<div id="{{id}}" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="{{id}}Label" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button><h3>{{title}}</h3></div><div class="modal-body"><p></p></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">{{close}}</button><button ng-click="clickOk()" class="btn blue">{{ok}}</button></div></div>',
            transclude: true,
            compile: function(){
                return {
                    pre: function(scope, element, attr){

                        attr.modalId = attr.modalId || 'modal';
                        attr.modalTitle = attr.modalTitle || 'Please Confirm';
                        element.find('.modal-body p').html(attr.modalBody || 'Are you sure?');
                        attr.modalOk = attr.modalOk || 'Confirm';
                        attr.modalClose = attr.modalClose || 'Cancel';

                        scope.clickOk = scope.click || function(){};
                    }
                }
            }
        }
    });