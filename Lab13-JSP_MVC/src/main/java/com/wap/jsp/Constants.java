package com.wap.jsp;

import java.util.HashMap;
import java.util.Map;

public class Constants {
    public static final Map<String, User> users = new HashMap<String, User>();
    public static final String COOKIES_NAME = "state.management.wap.username";
    public static final String PROMO_COOKIES_NAME = "state.management.wap.promo";

    static {
        users.put("hantruong", new User("hantruong", "123456"));
        users.put("admin", new User("admin", "123456"));
    }

    public static final boolean isAuthenticated(String username, String password) {
        User user = users.get(username);
        if (user != null && username != null && password != null && user.getPassword().equals(password))
            return true;
        return false;
    }

    public static final User getCurrentUser(String username) {
        return users.get(username);
    }

}
