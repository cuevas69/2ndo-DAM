package com.example.ObjectDB.repository;

import com.example.ObjectDB.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Puedes agregar consultas personalizadas aquí si es necesario
}
