import {Truck, Ship, type IProduct} from "./factoryShit"

/**********
 * 简易工厂
 */
class SimpleFactory {
    private constructor() {}

    static createDefaultTruck(): IProduct {
        return new Truck('', 18, '', '', '', 3);
    }

    static createDefaultShip(): IProduct {
        return new Ship('', 18, '', '', '', 3);
    }
}

/**
 * 业务代码
 */
const type: string = 'truck';
let vehicle: IProduct = SimpleFactory.createDefaultTruck();

/**
 * 解决问题:
 * ✔️ 复杂参数实例化
 * ❌ 新增类需要修改业务代码
 * ❌ 多种运输方式无法共用通用方法, 运输类内会出现很多复制粘贴的代码
 */


/**********
 * 工厂方法
 */
class TransportFactory {
    static createDefault(type: string): IProduct {
        switch(type) {
            case 'truck': {
                return new Truck2('', 18, '', '', '', 3);
            }
            case 'ship': {
                return new Ship2('', 18, '', '', '', 3);
            }
            default:
                throw new Error('')
        }
    }
}

class Truck2 extends TransportFactory implements IProduct {
    constructor(
        public name: string,
        public age: number,
        public buyDate: string,
        public scrapDate: string,
        public driverLicenseLevel: string,
        public weight: number,
    ) {super();}
    depart(destination: string): void {
        console.log(`depart ${destination}!!!`);
    }

    transport(): void {
        throw new Error("Method not implemented.");
    }

    static createDefault(): IProduct {
        return new Truck2('', 18, '', '', '', 3);
    }
}

class Ship2 extends TransportFactory implements IProduct {
    constructor(
        public name: string,
        public age: number,
        public buyDate: string,
        public scrapDate: string,
        public driverLicenseLevel: string,
        public weight: number,
    ) {super();}
    depart(destination: string): void {
        console.log(`depart ${destination}!!!`);
    }
    
    transport(): void {}

    static createDefault(): IProduct {
        return new Ship2('', 18, '', '', '', 3);
    }
}

/**
 * 业务代码
 */
const type2: string = 'ship';
let vehicle2: IProduct = TransportFactory.createDefault(type2);

/**
 * 解决问题:
 * ✔️ 复杂参数实例化
 * ✔️ 新增类需要修改业务代码
 * ❌ 多种运输方式无法共用通用方法, 运输类内会出现很多复制粘贴的代码
 */


/**********
 * 抽象工厂
 */

abstract class ATransport implements IProduct {
    abstract transport(): void;
    depart(destination: string): void {
        console.log(`depart ${destination}!!!`);
    }

    static createDefault(type: string): IProduct {
        switch(type) {
            case 'truck': {
                return new Truck3('', 18, '', '', '', 3);
            }
            case 'ship': {
                return new Ship3('', 18, '', '', '', 3);
            }
            default:
                throw new Error('')
        }
    }
}

class Truck3 extends ATransport {
    constructor(
        public name: string,
        public age: number,
        public buyDate: string,
        public scrapDate: string,
        public driverLicenseLevel: string,
        public weight: number,
    ) {super();}
    
    transport(): void {}
}

class Ship3 extends ATransport {
    constructor(
        public name: string,
        public age: number,
        public buyDate: string,
        public scrapDate: string,
        public driverLicenseLevel: string,
        public weight: number,
    ) {super();}
    
    transport(): void {}
}

/**
 * 业务代码
 */
const type3: string = 'truck';
let vehicle3: IProduct = ATransport.createDefault(type3);
vehicle3.transport();
vehicle3.depart('');

/**
 * 解决问题:
 * ✔️ 复杂参数实例化
 * ✔️ 新增类需要修改业务代码
 * ✔️ 多种运输方式无法共用通用方法, 运输类内会出现很多复制粘贴的代码
 */
