package com.example.offset;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.example.offset.repos")
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class OffsetApplication {

    public static void main(String[] args) {
        SpringApplication.run(OffsetApplication.class, args);
    }

}
