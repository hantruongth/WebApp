package com.mum.wap.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mum.wap.dao.ProductDAO;
import com.mum.wap.model.Product;
import com.google.gson.Gson;

/**
 * Servlet implementation class ProductController
 */
@WebServlet({"/product", ""})
public class ProductController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private ProductDAO dao;
    Gson mapper = new Gson();

    @Override
    public void init() throws ServletException {
        dao = new ProductDAO();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setAttribute("products", dao.getAllProducts());
        RequestDispatcher view = request.getRequestDispatcher("product.jsp");
        view.forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String jsonSting = request.getParameter("product");
        Product product = mapper.fromJson(request.getParameter("product"), Product.class);
        product.setId(dao.genId());
        dao.addProduct(product);

        PrintWriter out = response.getWriter();

        out.print(mapper.toJson(product));
    }

}
