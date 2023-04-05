package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.pojo.BookingInfo;
import com.project.pojo.User;
import com.project.repository.IBookingInfoRepository;
import com.project.repository.IUserRepository;

@Service
@Transactional
public class BookingInfoServiceImpl implements IBookingInfoService {

	@Autowired
	private IBookingInfoRepository ibookingrepo;
	@Autowired
	private IUserRepository iuserrepo;


	@Override
	public List<BookingInfo> getBookingdetails(String name) {
		User u = iuserrepo.findByEmail(name).orElseThrow();

		return ibookingrepo.findByUser(u);
	}
	
	@Override
	public void transaction(BookingInfo bookInfo, String email) {
		System.out.println("in trasaction");
		System.out.println(bookInfo);
		bookInfo.setUser(iuserrepo.findByEmail(email).orElseThrow());
		ibookingrepo.save(bookInfo);
		
	}

}
