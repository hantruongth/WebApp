package com.lab11;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;

public class SupportServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String name = request.getParameter("name");
        String email = request.getParameter("email");

        String ticketId = UUID.randomUUID().toString();

        ServletConfig servletConfig = this.getServletConfig();
        String supportEmail = servletConfig.getInitParameter("support-email");

        StringBuilder sb = new StringBuilder();

        sb.append("<p>Thank you! <strong>%s</strong> for contacting us. ");
        sb.append("We should receive reply from us with in 24 hrs in your email address <strong>%s</strong>. ");
        sb.append("Let us know in our support email <strong>%s</strong> if you don't receive reply within 24 hrs. ");
        sb.append("Please be sure to attach your reference <strong>%s</strong> in your email.</p>");
        sb.append("<p>Go back <a href='/'>Home</a></p>");

        String content = String.format(sb.toString(), name, email, supportEmail, ticketId);

        response.getWriter().println(content);

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        out.print("<html><head><title>CS TechSupport</title></head><body>");
        out.print("<form method='post' action='/support'><br/>");
        out.print("<label>Name</label><input type='text' id='name' name='name' required/><br/>");
        out.print("<label>Email address</label><input type='text' id='email' name='email' required/><br/>");
        out.print("<label>Problem</label><input type='text' id='problem' name='problem' required/><br/>");
        out.print("<label>Problem description</label><br/>");
        out.print("<textarea id='detail' cols='80' rows='10' name='detail' required></textarea><br/>");

        out.print("<input type='submit' value='Help'/>");
        out.print("</form>");
        out.print("</body></html>");

    }
}
