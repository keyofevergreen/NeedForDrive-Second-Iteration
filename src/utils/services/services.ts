import authService, { AuthServiceInterface } from './Auth/service';
import ordersService, { OrderServiceInterface } from './Order/service';
import carsService, { CarsServiceInterface } from './Cars/service';
import categoryService, { CategoryServiceInterface } from './Category/service';
import citiesService, { CitiesServiceInterface } from './Cities/service';
import orderStatusService, { OrderStatusServiceInterface } from './OrderStatus/service';
import pointsService, { PointsServiceInterface } from './Points/service';
import ratesService, { RatesServiceInterface } from './Rates/service';
import rateTypesService, { RateTypesInterface } from './RateTypes/service';

export interface ServicesInterface {
  auth: AuthServiceInterface,
  order: OrderServiceInterface,
  cars: CarsServiceInterface,
  category: CategoryServiceInterface,
  cities: CitiesServiceInterface,
  orderStatus: OrderStatusServiceInterface,
  points: PointsServiceInterface,
  rates: RatesServiceInterface,
  rateTypes: RateTypesInterface,
}

const createServices = (): ServicesInterface => ({
  auth: authService(),
  order: ordersService(),
  cars: carsService(),
  category: categoryService(),
  cities: citiesService(),
  orderStatus: orderStatusService(),
  points: pointsService(),
  rates: ratesService(),
  rateTypes: rateTypesService(),
});

export default createServices;
