package com.project.pojo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
@Table(name = "booking_info")
public class BookingInfo extends BaseEntity {

	@Column(name = "total_amount")
	private String totalAmount;
	@Column(name = "full_name")
	private String fullName;
	private String contact;
	private String pincode;
	private String state;
	private String city;
	private String line1;
	private String line2;
	@Column(name = "payment_id")
	private String paymentId;
	@Column(name = "order_id")
	private String orderId;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "car_id")
	private Car car;

	/**
	 * @param totalAmount
	 * @param fullName
	 * @param contact
	 * @param pincode
	 * @param state
	 * @param city
	 * @param line1
	 * @param line2
	 * @param paymentId
	 * @param orderId
	 * @param user
	 */

//	public BookingInfo(String totalAmount, String fullName, String contact, String pincode, String state, String city,
//			String line1, String line2, String paymentId, String orderId, LocalDate startDate, LocalDate endDate, Car car) {
//		super();
//		this.totalAmount = totalAmount;
//		this.fullName = fullName;
//		this.contact = contact;
//		this.pincode = pincode;
//		this.state = state;
//		this.city = city;
//		this.line1 = line1;
//		this.line2 = line2;
//		this.paymentId = paymentId;
//		this.orderId = orderId;
//		this.startDate = startDate;
//		this.endDate = endDate;
//		this.car = car;
//	}



	public BookingInfo(String totalAmount, String fullName, String contact, String pincode, String state, String city,
			String line1, String line2, String paymentId, String orderId, LocalDate startDate, LocalDate endDate,
			String status, Car car) {
		super();
		this.totalAmount = totalAmount;
		this.fullName = fullName;
		this.contact = contact;
		this.pincode = pincode;
		this.state = state;
		this.city = city;
		this.line1 = line1;
		this.line2 = line2;
		this.paymentId = paymentId;
		this.orderId = orderId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		this.car = car;
	}}
