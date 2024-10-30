(function () {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    //To Buy Controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buyList = this;

        buyList.bought = function(index){
            ShoppingListCheckOffService.addToBought(index);
        }

        buyList.items = ShoppingListCheckOffService.showBuyItems();

        buyList.isEmpty = function (index) {
            return ShoppingListCheckOffService.isBuyEmpty();
        }
    }

    //Already Bought Controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.showBoughtItems();

        boughtList.isEmpty = function(){
            return ShoppingListCheckOffService.isBoughtEmpty();
        }
    }

    //Service
    function ShoppingListCheckOffService(){
        var service = this;

        // List of items to buy
        var toBuy = [
            {
                name : "fruits",
                quantity : 3
            },
            {
                name : "breads",
                quantity : 4
            },
            {
                name : "eggs",
                quantity : 10
            },
            {
                name : "snacks",
                quantity : 5
            },
            {
                name : "cereals",
                quantity : 2
            },
            {
                name : "milk",
                quantity : 1
            },
        ]

        var alreadyBought = [];

        service.addToBought = function(index){
            alreadyBought.push(toBuy[index]);
            toBuy.splice(index,1);
        }

        service.showBuyItems = function(){
            return toBuy;
        }

        service.showBoughtItems = function(){
            return alreadyBought;
        }

        service.isBuyEmpty = function(){
            if (toBuy.length === 0){
                return true;
            } else return false;
        }

        service.isBoughtEmpty = function(){
            if (alreadyBought.length ===0){
                return true;
            } else return false;
        }
    }
   } 
)();