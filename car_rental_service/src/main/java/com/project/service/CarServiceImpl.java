package com.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.dto.FindDTO;
import com.project.pojo.BookingInfo;
import com.project.pojo.Car;
import com.project.pojo.User;
import com.project.repository.IBookingInfoRepository;
import com.project.repository.ICarRepository;
import com.project.repository.IUserRepository;

@Service
@Transactional
public class CarServiceImpl implements ICarServices {
	@Autowired
	private ICarRepository icarrepo;
	@Autowired
	private IUserRepository iuserrepo;
	@Autowired
	private IBookingInfoRepository ibookrepo;

	@Override
	public Car addCars(Car car, String email) {
		User u = iuserrepo.findByEmail(email).orElseThrow();
		car.setUser(u);
		return icarrepo.save(car);
	}

	@Override
	public Car getCar(int id) {

		return icarrepo.findById(id).orElseThrow();
	}

	@Override
	public void editCar(Car car, String name) {
		User u = iuserrepo.findByEmail(name).orElseThrow();
		car.setUser(u);
		icarrepo.save(car);

	}

	@Override
	public void removeCar(int id) {
		icarrepo.deleteById(id);
	}

	@Override
	public List<Car> getCars(String name) {
		User u = iuserrepo.findByEmail(name).orElseThrow();
		return icarrepo.findByUser(u);
	}

	@Override
	public List<Car> getCarsByCityLocation(FindDTO findDto) {

		List<Car> cars = icarrepo.findByCarLocation(findDto.getCarLocation());
		List<BookingInfo> bcars = ibookrepo.findByStartDateAndEndDateInRange(findDto.getStartDate(),
				findDto.getEndDate(), findDto.getStartDate(), findDto.getEndDate());
		System.out.println(bcars);
		for (BookingInfo binfo : bcars) {
			cars = cars.stream().filter(o -> o.getId() != binfo.getCar().getId()).collect(Collectors.toList());
		}

		return cars;
	}

//	@Override
//	public List<Car> getCarsByType(String type) {
//		
//		return *.findByCategory(Category.valueOf(category.toUpperCase()));
//	}

}
