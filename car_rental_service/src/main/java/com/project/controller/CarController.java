package com.project.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.FindDTO;
import com.project.pojo.Car;
import com.project.service.ICarServices;



@RestController
@RequestMapping
@CrossOrigin(origins  = "http://localhost:3000")
public class CarController {
	@Autowired
	private ICarServices carServices;
	
	//1)add car
	@PostMapping("/admin/addcar")
	public ResponseEntity<?> addCar(@RequestBody Car car, HttpServletRequest request){
		
		return  ResponseEntity.ok(carServices.addCars(car,request.getUserPrincipal().getName()));
		
	}
	//2)getcar by id
	@GetMapping("/getcar/{id}")
	ResponseEntity<?>getCar(@PathVariable int id){
		return ResponseEntity.ok(carServices.getCar(id));
	}
//	3)update car
	@PutMapping("/admin/editcar")
	ResponseEntity<?>editCar(@RequestBody Car car, HttpServletRequest request){
		carServices.editCar(car,request.getUserPrincipal().getName());
		return new ResponseEntity<>(HttpStatus.OK);
	}
//	4)delete car
	@DeleteMapping("/admin/carremove/{id}")
	void removeCar(@PathVariable int id, HttpServletRequest request){
		carServices.removeCar(id) ;
	}
//	5)getallcars
	@GetMapping("/alladmincars")
	ResponseEntity<?>getCars(HttpServletRequest request){
		return ResponseEntity.ok(carServices.getCars(request.getUserPrincipal().getName()));
	}
	
//	6) find cars by sdate edate and carLocation
	
	@PostMapping("/findcars")
	ResponseEntity<?>findCars(@RequestBody FindDTO findDto, HttpServletRequest request){
		
		return ResponseEntity.ok(carServices.getCarsByCityLocation(findDto));
		
	}


	

}
