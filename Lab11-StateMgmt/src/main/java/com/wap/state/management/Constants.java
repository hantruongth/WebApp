package com.wap.state.management;

import java.util.HashMap;
import java.util.Map;

public class Constants {
    public static final Map<String, User> users = new HashMap<String, User>();

    static {
        users.put("hantruong", new User("hantruong", "123456"));
        users.put("admin", new User("admin", "123456"));
    }

    public static final boolean isAuthenticated(String username, String password){
        User user = users.get(username);
        if(user != null && username != null && password != null && user.getPassword().equals(password))
            return true;
        return false;
    }

    public static final User getCurrentUser(String username){
        return users.get(username);
    }


}
