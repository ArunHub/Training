interface DefaultChPackage{
    subscribeDefaultChPackage(custID: number);
}

interface KidsChPackage extends DefaultChPackage{
    subscribeKidsChPackage(custID: number, amount: number): string;
}

interface SportsChPackage extends DefaultChPackage{
    subscribeSportsChPackage(custID: number, amount: number): string;
}

class TataSkyService implements KidsChPackage, SportsChPackage{
    subscribeSportsChPackage(custID: number, amount: number): string {
        return 'kids'
    }
    subscribeKidsChPackage(custID: number, amount: number): string {
        return 'kids'
    }    
    subscribeDefaultChPackage(custID: number) {
        return 'kids'
    }
}

let tss: KidsChPackage = new TataSkyService();
tss.subscribeKidsChPackage(123,456);