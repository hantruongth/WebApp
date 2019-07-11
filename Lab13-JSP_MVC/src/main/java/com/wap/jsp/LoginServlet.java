package com.wap.jsp;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet(name = "loginServlet", urlPatterns = "/login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String username = request.getParameter("usernameTxt");
        String password = request.getParameter("passwordTxt");
        boolean remember = request.getParameter("rememberBtn") != null ? true : false;

        if (Constants.isAuthenticated(username, password)) {
            HttpSession session = request.getSession();
            session.setAttribute("user", Constants.getCurrentUser(username));


            if (remember) {
                Cookie cookie = new Cookie(Constants.COOKIES_NAME, username);
                cookie.setMaxAge(30 * 60 * 60 * 24); // 1 month
                response.addCookie(cookie);
            } else {
                Cookie cookie = new Cookie(Constants.COOKIES_NAME, "");
                cookie.setMaxAge(-1);
                response.addCookie(cookie);
            }

            Cookie promoCookies = new Cookie(Constants.PROMO_COOKIES_NAME, "$100");
            promoCookies.setMaxAge(30 * 60 * 60 * 24); // 1 month
            response.addCookie(promoCookies);

            response.sendRedirect("/welcome.jsp");
        } else {
            request.setAttribute("errorMsg", "Username or password does not match!");
            request.getRequestDispatcher("/").forward(request, response);

        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect("/");

    }
}
