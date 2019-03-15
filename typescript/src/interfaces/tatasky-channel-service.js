var TataSkyService = /** @class */ (function () {
    function TataSkyService() {
    }
    TataSkyService.prototype.subscribeSportsChPackage = function (custID, amount) {
        return 'kids';
    };
    TataSkyService.prototype.subscribeKidsChPackage = function (custID, amount) {
        return 'kids';
    };
    TataSkyService.prototype.subscribeDefaultChPackage = function (custID) {
        return 'kids';
    };
    return TataSkyService;
}());
var tss = new TataSkyService();
tss.subscribeKidsChPackage(123, 456);
//# sourceMappingURL=tatasky-channel-service.js.map