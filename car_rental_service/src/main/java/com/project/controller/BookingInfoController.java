package com.project.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.service.IBookingInfoService;

@RestController
@RequestMapping
@CrossOrigin(origins  = "http://localhost:3000")
public class BookingInfoController {

	@Autowired
	private IBookingInfoService bookingService;
	
	@GetMapping("/getbookinginfo")
	public ResponseEntity<?> getOrders(HttpServletRequest request){
     return new ResponseEntity<>(bookingService.getBookingdetails(request.getUserPrincipal().getName()),HttpStatus.OK);		
	}
	
}
