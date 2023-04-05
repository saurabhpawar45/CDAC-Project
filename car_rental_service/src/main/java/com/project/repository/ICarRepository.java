package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.pojo.Car;
import com.project.pojo.Type;
import com.project.pojo.User;

public interface ICarRepository extends JpaRepository<Car, Integer>{

	List<Car> findByUser(User u);

	List<Car> findByType(Type type);

	List<Car> findByCarLocation(String carLocation);

}
	