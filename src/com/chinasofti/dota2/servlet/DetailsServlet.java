package com.chinasofti.dota2.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.chinasofti.dota2.entity.Product;
import com.chinasofti.dota2.service.ProductService;


public class DetailsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("进来了游戏手办");
		response.setContentType("text/html;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		int cid = Integer.parseInt(request.getParameter("cid"));
		ProductService deta = new ProductService();
		ArrayList<Product> all = deta.selectAllPro(cid);
		System.out.println(cid);
		request.setAttribute("all", all);
		request.getRequestDispatcher("details.jsp").forward(request, response);
	}

}
