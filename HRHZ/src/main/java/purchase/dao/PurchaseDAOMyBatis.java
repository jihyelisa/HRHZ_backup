package purchase.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import hrhz.dto.ProductImageDTO;

@Repository
@Transactional
public class PurchaseDAOMyBatis implements PurchaseDAO {
	@Autowired
    private SqlSession sqlSession;

	@Override
	public List<Map<String, Object>> getProductDetail(String productCode) {
		return sqlSession.selectList("purchaseSQL.getProductDetail", productCode);
	}

	@Override
	public List<Map<String, Object>> getProductImages(String productCode) {
		List<Map<String, Object>> list = sqlSession.selectList("purchaseSQL.getProductImages", productCode);
		return list;
	}
}
