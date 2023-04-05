package com.project.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class FindDTO {
	private String carLocation;
	private LocalDate startDate;
	private LocalDate endDate;
	/**
	 * 
	 */



}
