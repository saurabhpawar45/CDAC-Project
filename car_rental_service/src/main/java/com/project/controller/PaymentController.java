package com.project.controller;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.pojo.BookingInfo;
import com.project.service.IUserServices;
import com.project.service.IBookingInfoService;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {
	@Autowired
	private IUserServices userService;

	@Autowired
	private IBookingInfoService bookingService;

	@PostMapping("/customer/payment")
	public String Payment(@RequestBody BookingInfo order, HttpServletRequest request) throws InterruptedException {
		System.out.println("in payment");
		try {

			System.out.println(order);
			RazorpayClient client = new RazorpayClient("rzp_test_DGMZ4HkcUP9PIr", "VXnQCrajq6tx0EQoG8AN8KlG");
			JSONObject ob = new JSONObject();
			ob.put("amount", Double.parseDouble(order.getTotalAmount().toString()) * 100);
			ob.put("currency", "INR");
			ob.put("receipt", "txn_12345");
			com.razorpay.Order create = client.Orders.create(ob);
			return create.toString();
			
		} catch (RazorpayException e) {
			return "bad_Request";

		}
	}

	@PostMapping("/storebooking")
	public void storePaymentDetails(@RequestBody BookingInfo bookinfo, HttpServletRequest request)
			throws InterruptedException {
//	order.setUser(userServices.getUser(request.getUserPrincipal().getName()).orElseThrow());
		System.out.println(" new order " + bookinfo);

		bookingService.transaction(bookinfo, request.getUserPrincipal().getName());
	}

}
