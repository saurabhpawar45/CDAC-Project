package com.project.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.project.pojo.User;
import com.project.repository.IUserRepository;
import com.project.service.IUserServices;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
class TestUserRepository {
	@Autowired
	private IUserRepository userRepo;
//	@Autowired
//	private IUserServices userService;

	@Test
	void testFindByEmail() {
		System.out.println(
				userRepo.findByEmail("prateek@gmail.com").orElseThrow(() -> new RuntimeException("invalid user email")));
	}
	@Test
	void testFindByContact() {
		System.out.println(
				userRepo.findByContact("7897469256").orElseThrow(() -> new RuntimeException("invalid user number")));
	}

//	@Test
//	public void saveUserTest() {
//		User user=new User("Smith","Shaw","9875641224","smith@gmail.com","smith@123","VENDOR");
//	    when(userRepo.save(user)).thenReturn(user);
//	    assertEquals(user, userService.registerUser(user));
//	}

}
