//package com.project.dao;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//import java.util.List;
//import java.util.Locale.Category;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.annotation.Rollback;
//
//import com.project.pojo.Car;
//import com.project.repository.ICarRepository;
//import com.project.repository.IUserRepository;
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE) 
//public class TestCarRepository {
//
//	@Autowired
//	private ICarRepository CarRepo;
//	
//	@Autowired
//	private IUserRepository userRepo;
//	
//	//test for save new Car
//	@Test
//    public void testSaveNewCar() {
//		 CarRepo.save(new Car("Pomegrante","https://www.bigbasket.com/media/uploads/p/l/10000269_31-fresho-pomegranate.jpg",Category.FRUITS,50,120.00,"New In MArket"));
//                 
//        List<Car> Car = CarRepo.findByName("Pomegrante");
////        for(Car x:Car)
////        assertThat(x.getName()).isEqualTo("Pomegrante");
//    }
//	
//	//test Car list empty or not
//	@Test
//	public void testListCars() {
//	    List<Car> Cars = (List<Car>)  CarRepo.findAll();
//	    assertThat(Cars).size().isGreaterThan(0);
//	}
//	
//	//test find Car by name
//	@Test
//	public void testFindCarByName() {
//	    List<Car> Car = CarRepo.findByName("Apple");    
//	    for(Car x:Car)
//	    assertThat((x.getName()).equals("Apple"));
//	}
//
//	
//	//test for update Car
//	@Test
//	@Rollback(false)
//	public void testUpdateCar() {
//	    List<Car> Car = CarRepo.findByName("Apple");
//	    for(Car x:Car) 
//	       x.setRate(340);     
//	    CarRepo.saveAll(Car); 
//	    List<Car> updatedCar = CarRepo.findByName("Apple");	     
//	    for(Car x:updatedCar)
//	    assertThat(x.getRate()==(340));
//	}
//
//
//
////test for delete Car	
//@Test
//@Rollback(false)
//public void testDeleteCar() {
//    List<Car> Car = CarRepo.findByName("strawberry");
//     
//    CarRepo.delete((Car.get(0)));
//     
//    List<Car> deletedCar = CarRepo.findByName("strawberry");
//     
//	assertThat(deletedCar).isNull();       
//     
//}
//}