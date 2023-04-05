package com.project.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.pojo.BookingInfo;
import com.project.pojo.User;

public interface IBookingInfoRepository extends JpaRepository<BookingInfo, Integer> {

	List<BookingInfo> findByUser(User u);
	@Query("SELECT e FROM BookingInfo e WHERE (e.startDate >= :startDate1 AND e.startDate<= :endDate1) OR (e.endDate <= :endDate2 AND e.endDate>= :startDate2)")
    List<BookingInfo> findByStartDateAndEndDateInRange(@Param("startDate1") LocalDate startDate1, @Param("endDate1") LocalDate endDate1,@Param("startDate2") LocalDate startDate2, @Param("endDate2") LocalDate endDate2);

}
