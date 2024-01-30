package com.salt.server.Account.repository;

import com.salt.server.Account.model.Social;
import com.salt.server.Account.model.UserDetail;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SocialRepository extends ListCrudRepository<Social, UUID> {
    Social findByUserDetail(UserDetail userDetail);
}
