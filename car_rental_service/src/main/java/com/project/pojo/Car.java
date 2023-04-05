package com.project.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@ToString
@Getter
@NoArgsConstructor
@Entity
@Table(name = "car")
public class Car extends BaseEntity {
	@Column(length = 20,name = "name")
	@NotEmpty(message = "name cannot be empty")
	String make;
	@Column(length = 20,name = "model")
	@NotEmpty(message = "model cannot be empty")
	String model;
	@Column(name = "image_url")
	@NotEmpty(message = "cannot be empty")
	String imageUrl;
	@Enumerated(value = EnumType.STRING)
	Type type;
	int seat;
	@Positive
	double rent;
	String carLocation;
	String fuelType;
	@Positive
	Double mileage;
	

	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	
	


	public Car(@NotEmpty(message = "name cannot be empty") String make,
			@NotEmpty(message = "model cannot be empty") String model,
			@NotEmpty(message = "cannot be empty") String imageUrl, Type type, int seat, @Positive double rent,
			String carLocation, String fuelType, @Positive Double mileage) {
		super();
		this.make = make;
		this.model = model;
		this.imageUrl = imageUrl;
		this.type = type;
		this.seat = seat;
		this.rent = rent;
		this.carLocation = carLocation;
		this.fuelType = fuelType;
		this.mileage = mileage;
	}
	
	
	
}
