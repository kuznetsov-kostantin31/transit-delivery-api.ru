import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { BasketModule } from './basket/basket.module';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { OrderModule } from './order/order.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        DatabaseModule,
        UserModule,
        ProductModule,
        CategoryModule,
        BasketModule,
        DeliverymanModule,
        OrderModule
    ]
})

export class AppModule{}
