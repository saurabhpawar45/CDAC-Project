package com.project.service;

import java.util.List;

import com.project.dto.FindDTO;
import com.project.pojo.Car;

public interface ICarServices {

	Car addCars(Car car,String email);

	Car getCar(int id);

	void editCar(Car car, String name);

	void removeCar(int id);

	List<Car> getCars(String name);

	List<Car> getCarsByCityLocation(FindDTO findDto);

//	List<Car> getCarsByType(String type);



	

}
