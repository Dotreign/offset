package com.example.offset;

import com.example.offset.Domain.User;
import com.example.offset.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller("")
public class RegisterController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String greeting() {
        return "index";
    }

//    @GetMapping("/profile")
//    public String user(Map<String, Object> model) {
//        Iterable<User> info = userRepository.findAll();
//
//        model.put("info", info);
//
//        return "profile";
//    }

    @RequestMapping(method = {RequestMethod.GET, RequestMethod.PUT})
    @PostMapping
    public String addUser(@RequestParam String email, @RequestParam String username, @RequestParam String country, @RequestParam String phoneNumber, @RequestParam String password, Map<String, Object> model) {
        User user = new User(username, email, country, phoneNumber, password);
        userRepository.save(user);
        return "index";
    }

}