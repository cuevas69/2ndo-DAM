package com.example.ObjectDB;

import com.example.ObjectDB.model.User;
import com.example.ObjectDB.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ObjectDbApplication implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(ObjectDbApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Realiza operaciones de base de datos aquí
        User user = new User();
        user.setUsername("john_doe");
        user.setEmail("john.doe@example.com");
        userRepository.save(user);
    }
}
