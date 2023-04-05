package com.project.service;

import java.util.List;

import com.project.pojo.BookingInfo;

public interface IBookingInfoService {

	List<BookingInfo> getBookingdetails(String name);


	void transaction(BookingInfo order, String email) ;

}
