package com.chinasofti.dota2.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.chinasofti.dota2.entity.Product;
import com.chinasofti.dota2.service.DetailsService;

/**
 * Servlet implementation class AllProductServlet
 */
public class AllProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		DetailsService detailsService = new DetailsService();
		ArrayList<Product> allProduct = detailsService.getAllProduct();
		session.setAttribute("allProduct", allProduct);
		response.sendRedirect("details.jsp");
	}

}
