/**********
 * 假设你正在开发一款物流管理应用
 */

export interface IProduct {
    transport(): void
    depart(destination: string): void
    
}
/**
 * 卡车类
 */
export class Truck implements IProduct {
    constructor(
        public name: string,
        public age: number,
        public buyDate: string,
        public scrapDate: string,
        public driverLicenseLevel: string,
        public weight: number,
    ) {}
    depart(destination: string): void {
        console.log(`depart ${destination}!!!`);
    }

    transport() {}
}

/**
 * 新增: 轮船类
 */
export class Ship implements IProduct {
    constructor(
        public name: string,
        public age: number,
        public buyDate: string,
        public scrapDate: string,
        public driverLicenseLevel: string,
        public weight: number,
    ) {}
    depart(destination: string): void {
        console.log(`depart ${destination}!!!`);
    }

    transport(): void {}
}

/**
 * 业务代码
 */
// ...
const type: string = 'truck';
let vehicle: IProduct | undefined;
if (type === 'truck') {
    // 默认卡车
   vehicle = new Truck('', 1, '2024-01-01', '2030-01-01', 'c1', 3);
} else {
    // 实例化其他运输工具类
}
// ...

/**********
 * 问题:
 * - 参数过多, 不便于实例化
 * - 增加新的物流运输方式 Ship, 需要在业务代码每一处中修改
 * - 多种运输方式无法共用通用方法, 运输类内会出现很多复制粘贴的代码
 * 
 * 解决方案:
 * - 将同一种类的创建过程放到工厂函数,
 * 工厂函数负责进行样板代码的编写
 */ 